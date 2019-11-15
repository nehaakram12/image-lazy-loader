# image-lazy-loader

## Description

Performance optimization helps improve the loading time of a web app. Using this
custom react component, image elements on the site can be loaded in a lazy
manner.

## Note

This is a work in progress. Not ready for production yet.

## Requirements

Works only for image urls from graph media cms

## Working

On initial page load, images are downloaded with low resolution and blur filter
from graph cms. Once the page has loaded completely, the images are replace with
original HD images and blur effect is removed

## How to Install

npm i @nehaakram12/image-lazy-loader

## How to integrate in react code

Example Usage:

import Picture from '@nehaakram12/image-lazy-loader';

<Picture className={styles.categoryImage} handle={handle} width={400}
alt={title} breakpointWidths={[320]} sizes={'(min-width: 1000px) 50vw, 100vw'}
objectFitMode />
