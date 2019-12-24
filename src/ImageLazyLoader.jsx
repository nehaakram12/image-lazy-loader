import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import './main.css';

const isObjectfitSupported = (element = 'img') => {
  if (typeof document !== 'undefined') {
    const testElem = document.createElement(element);
    return testElem.style.objectFit !== undefined;
  }
  return true;
};

const intersectionListeners = [];
let intersectionObserver = null;

const getIntersectionObserver = () => {
  if (intersectionObserver === null && typeof window !== 'undefined') {
    intersectionObserver = new IntersectionObserver(
      items => {
        items.forEach(item => {
          intersectionListeners.forEach(listener => {
            if (listener.item === item.target) {
              if (item.intersectionRatio > 0 || item.isIntersecting) {
                intersectionObserver.unobserve(listener.item);
                listener.callback();
              }
            }
          });
        });
      },
      { rootMargin: '200px', threshold: 0.3 }
    );
  }
  return intersectionObserver;
};

const listenToIntersections = (item, callback) => {
  getIntersectionObserver().observe(item);
  intersectionListeners.push({ item, callback });
};

const getUniqueArray = a => [...new Set(a)];

const pathStringBlur = ({ path, handle, type = '' }) => {
  const format = type === '' ? '' : `/output=format:${type}`;
  return `${path}/resize=w:40${format}/quality=value:6/compress/blur=amount:5/${handle}`;
};

const pathString = ({ path, handle, resizeWidth, type = '' }) => {
  const format = type === '' ? '' : `/output=format:${type}`;
  return `${path}/resize=w:${resizeWidth}${format}/quality=value:80/compress/${handle}`;
};

const generateSourceSet = ({
  path,
  handle,
  width,
  breakpointWidths,
  hiDPIMultiplier,
  type,
  blur
}) => {
  let resizeWidth = Math.round(width * hiDPIMultiplier);
  if (blur) {
    const hiDPISource = `${pathStringBlur({
      path,
      handle,
      type
    })} ${resizeWidth}w`;
    return getUniqueArray([hiDPISource]).join(',');
  }
  const hiDPISource = `${pathString({
    path,
    handle,
    resizeWidth,
    type
  })} ${resizeWidth}w`;
  let sourceSetList = '';
  sourceSetList = [width, ...breakpointWidths]
    .sort((a, b) => b - a)
    .filter(widthVariant => width >= widthVariant)
    .map(widthVariant => {
      resizeWidth = widthVariant;
      return `${pathString({
        path,
        handle,
        resizeWidth,
        type
      })} ${widthVariant}w`;
    });
  return getUniqueArray([hiDPISource, ...sourceSetList]).join(',');
};

/** Responsive picture component based on strategy outlined here:
 * i/https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/#the-fluid-and-variable-sized-image-use-cases
 * https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api
 *  */

class Picture extends PureComponent {
  constructor(props) {
    super(props);
    this.srcset = null;
    this.srcsetWebp = null;
    this.srcsetBlur = null;
    this.srcsetWebpBlur = null;
    let isVisible = false;
    let IOSupported = false;
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      IOSupported = true;
    }
    if (this.props.isLazy) {
      isVisible = isVisible || !IOSupported;
    } else {
      isVisible = true;
    }
    this.state = {
      isVisible,
      IOSupported
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  handleIntersection = element => {
    if (this.state.IOSupported && element) {
      listenToIntersections(element, () => {
        this.setState({ isVisible: true });
      });
    }
  };

  removeBlurryImage = () => {
    this.blurryImageElement.style.opacity = 0;
  };

  render() {
    const {
      width,
      breakpointWidths,
      alt,
      sizes,
      hiDPIMultiplier,
      path,
      className,
      handle,
      objectFitMode,
      isLazy
    } = this.props;
    const resizeWidth = Math.round(width * hiDPIMultiplier);
    if (isLazy) {
      this.srcsetWebpBlur = generateSourceSet({
        path,
        handle,
        width,
        breakpointWidths,
        hiDPIMultiplier,
        type: 'webp',
        blur: true
      });
      this.srcsetBlur = generateSourceSet({
        path,
        handle,
        width,
        breakpointWidths,
        hiDPIMultiplier,
        blur: true
      });
    }
    this.srcsetWebp = generateSourceSet({
      path,
      handle,
      width,
      breakpointWidths,
      hiDPIMultiplier,
      type: 'webp',
      blur: false
    });
    this.srcset = generateSourceSet({
      path,
      handle,
      width,
      breakpointWidths,
      hiDPIMultiplier,
      blur: false
    });
    const objectFitFallback = !isObjectfitSupported() && objectFitMode;
    return (
      <Fragment>
        {!objectFitFallback && (
          <div
            ref={e => this.handleIntersection(e)}
            className={`wrapper ${className ? className : ''}`}
          >
            <picture
              className={`picture ${objectFitMode ? 'picture_objectFit' : ''} ${
                !isLazy ? 'noLazy' : ''
              }`}
            >
              {isLazy && this.state.IOSupported && (
                <img
                  ref={img => {
                    this.blurryImageElement = img;
                  }}
                  src={pathStringBlur({ path, handle })}
                  alt={alt}
                  className={'blurryImage'}
                />
              )}
              {this.state.isVisible && (
                <Fragment>
                  <source
                    ref={source => {
                      this.sourceWebp = source;
                    }}
                    srcSet={this.srcsetWebp}
                    sizes={sizes}
                    type="image/webp"
                  />
                  <source
                    ref={source => {
                      this.sourceDefault = source;
                    }}
                    srcSet={this.srcset}
                    sizes={sizes}
                    type="image/jpeg"
                  />
                  <img
                    ref={img => {
                      this.imageElement = img;
                    }}
                    src={pathString({ path, handle, resizeWidth })}
                    alt={alt}
                    onLoad={() => {
                      if (isLazy) {
                        this.removeBlurryImage();
                      }
                    }}
                    className={!isLazy ? 'noLazy' : ''}
                  />
                </Fragment>
              )}
            </picture>
          </div>
        )}
        {objectFitFallback && (
          <div
            className={`objectFitFallback ${className ? className : ''}`}
            style={{
              backgroundImage: `url(${pathString({
                path,
                handle,
                resizeWidth
              })})`
            }}
          />
        )}
      </Fragment>
    );
  }
}

Picture.propTypes = {
  width: PropTypes.number,
  breakpointWidths: PropTypes.array,
  alt: PropTypes.string,
  sizes: PropTypes.string,
  hiDPIMultiplier: PropTypes.number,
  path: PropTypes.string,
  className: PropTypes.string,
  handle: PropTypes.string.isRequired,
  objectFitMode: PropTypes.bool,
  isLazy: PropTypes.bool
};

Picture.defaultProps = {
  /* pixel width at max viewport 1400 */
  width: 1400,
  /* variant widths to serve as alternatives to 'width' prop */
  breakpointWidths: [320, 640, 1024],
  alt: '',
  /* tell browser how much space image will take up, this typically matches responsive widths, eg sizes: '(min-width: 1000px) 33.3vw, 100vw' if images are 33.3% on desktop, cannot use % as unit, only vw, px and em */
  sizes: '100vw',
  hiDPIMultiplier: 1.5,
  path: '//media.graphcms.com',
  className: '',
  objectFitMode: false,
  isLazy: true
};

export default Picture;
