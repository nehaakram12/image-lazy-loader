# image-lazy-loader

Inspired by: 
* https://github.com/GraphCMS/graphcms-image
* https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/#the-fluid-and-variable-sized-image-use-cases
* https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-ap

### Features

* Performance efficient, reduces initial load time by loading low resolution blur images on page load
* Optimal sized images generated automatically for different devices and screen sizes.
* Preview images whilst loading in form of blurred thumbnails
* Lazy loading enabling original HD images to download only when they are in the current viewport

### Note

This is a work in progress, not ready for production yet. Your feedback would be appreciated, custom features can also be requested.

### Requirements

Currently, works only for image urls from graph media cms.
Support for other image sources will be added as enhanced feature.

### Working

On initial page load, images are downloaded with low resolution and blur filter
from graph cms. Once the image element is in active viewport, the blurred image is replaced with
original HD image and blur effect is removed.

### How to Install

npm i @nehaakram12/image-lazy-loader

### How to integrate in react code

Example Usage:

```jsx
import Picture from '@nehaakram12/image-lazy-loader';

<Picture className={styles.categoryImage} handle={handle} width={400}
alt={title} breakpointWidths={[320]} sizes={'(min-width: 1000px) 50vw, 100vw'}
objectFitMode />
```
