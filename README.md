# Javascript

## Contents

- [Javascript](#javascript)
  - [Contents](#contents)
  - [author](#author)
  - [introduction](#introduction)
  - [resources](#resources)
    - [official documentation](#official-documentation)
    - [related topics](#related-topics)
    - [notes](#notes)
  - [viewable output from this repository](#viewable-output-from-this-repository)
  - [javascript a to z](#javascript-a-to-z)
    - [import and export](#import-and-export)

## author

Phil Anderson @philanderson888

https://linktr.ee/philanderson888

## introduction

repositories from which to learn the basics of javascript 

## resources

### official documentation 

[docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[javascript.info](https://javascript.info)

### related topics

[nodejs](https://github.com/philanderson888/nodejs)

[jQuery](https://github.com/philanderson888/jquery)

[react](https://github.com/philanderson888/react)

[typescript](notes/typescript.md)

[libraries](notes/libraries.md)

### notes

see the [notes](notes/) folder

## viewable output from this repository

viewable output from this repository may be viewed on my netlify deployment pages

current at 2024

https://mellifluous-rugelach-2383f5.netlify.app/

## javascript a to z

### import and export 

https://javascript.info/import-export

```js
export const months = ['jan','feb','etc']

function doThis(){}
function doThat(){}
export {doThis,doThat};

import {doThis,doThat} from '/.myFile.js';
doThis()
doThat()
// or
import * as doThings from './myFile.js'
doThings.doThis()
doThings.doThat()
```

export `default` is used for the single item to be exported in a file.  

when `importing` braces are not required for items which were exported using `export default` 

ie 

```js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

import User from './user.js';

const john = new User('John');