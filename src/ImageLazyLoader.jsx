// Dependencies
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { TweenMax } from 'gsap';
// styles
import './picture-lazy.css';

const isObjectfitSupported = (element = 'img') => {
  if (typeof document !== 'undefined') {
    const testElem = document.createElement(element);
    return testElem.style.objectFit !== undefined;
  }
  return true;
};

const getUniqueArray = a => [...new Set(a)];

const pathStringBlur = ({ path, handle, type = '' }) => {
  const format = type === '' ? '' : `/output=format:${type}`;
  return `${path}/resize=w:50${format}/quality=value:5/compress/${handle}`;
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

/** Responsive picture component based on strategy outlined here: https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/#the-fluid-and-variable-sized-image-use-cases */

class ImageLazyLoader extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.imageElement.src = this.imageElement.dataset.src;
      this.sourceWebp.srcset = this.sourceWebp.dataset.srcset;
      this.sourceDefault.srcset = this.sourceDefault.dataset.srcset;
      TweenMax.to(this.imageElement, 0.7, {
        delay: 1,
        filter: 'blur(0px)'
      });
    }, 20);
  }
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
      objectFitMode
    } = this.props;
    const srcsetWebpBlur = generateSourceSet({
      path,
      handle,
      width,
      breakpointWidths,
      hiDPIMultiplier,
      type: 'webp',
      blur: true
    });
    const srcsetBlur = generateSourceSet({
      path,
      handle,
      width,
      breakpointWidths,
      hiDPIMultiplier,
      blur: true
    });
    const srcsetWebp = generateSourceSet({
      path,
      handle,
      width,
      breakpointWidths,
      hiDPIMultiplier,
      type: 'webp',
      blur: false
    });
    const srcset = generateSourceSet({
      path,
      handle,
      width,
      breakpointWidths,
      hiDPIMultiplier,
      blur: false
    });
    const resizeWidth = width;
    const objectFitFallback = !isObjectfitSupported() && objectFitMode;
    return (
      <Fragment>
        {!objectFitFallback && (
          <picture
            className={classnames(
              'picture',
              objectFitMode && 'picture_objectFit',
              className
            )}
          >
            <source
              ref={source => {
                this.sourceWebp = source;
              }}
              srcSet={srcsetWebpBlur}
              data-srcset={srcsetWebp}
              sizes={sizes}
              type='image/webp'
            />
            <source
              ref={source => {
                this.sourceDefault = source;
              }}
              srcSet={srcsetBlur}
              data-srcset={srcset}
              sizes={sizes}
              type='image/jpeg'
            />
            <img
              ref={img => {
                this.imageElement = img;
              }}
              src={pathStringBlur({ path, handle })}
              data-src={pathString({ path, handle, resizeWidth })}
              alt={alt}
            />
          </picture>
        )}
        {objectFitFallback && (
          <div
            className={classnames('objectFitFallback', className)}
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

ImageLazyLoader.propTypes = {
  width: PropTypes.number,
  breakpointWidths: PropTypes.array,
  alt: PropTypes.string,
  sizes: PropTypes.string,
  hiDPIMultiplier: PropTypes.number,
  path: PropTypes.string,
  className: PropTypes.string,
  handle: PropTypes.string.isRequired,
  objectFitMode: PropTypes.bool
};

ImageLazyLoader.defaultProps = {
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
  objectFitMode: false
};

export default ImageLazyLoader;
