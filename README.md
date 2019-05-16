# @pezhmanparsaee/tinty

[![npm (scoped)](https://img.shields.io/npm/v/@pezhmanparsaee/tiny.svg)](https://www.npmjs.com/package/@pezhmanparsaee/tiny)


Removes all spaces from a string

## Install
```
$ npm install @pezhmanparsaee/tiny
```

## Usage
```js
const tiny = require('@pezhmanparsaee/tiny');

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1

```
