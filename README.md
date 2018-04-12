# emoji-translator

[![Build Status][circleci-image]][circleci-url]
[![Coverage Status][coverage-image]][coverage-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

## Installation

```js
npm i emoji-translator -S
```

[circleci-image]: https://circleci.com/gh/dreipol/emoji-translator/tree/master.svg?style=svg&circle-token=

[circleci-url]: https://circleci.com/gh/dreipol/emoji-translator/tree/master

[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[license-url]: LICENSE

[npm-version-image]: http://img.shields.io/npm/v/emoji-translator.svg?style=flat-square

[npm-downloads-image]: http://img.shields.io/npm/dm/emoji-translator.svg?style=flat-square

[npm-url]: https://npmjs.org/package/emoji-translator

[coverage-image]: https://img.shields.io/coveralls/dreipol/emoji-translator/master.svg?style=flat-square

[coverage-url]: https://coveralls.io/r/dreipol/emoji-translator/?branch=master

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [create](#create)

### create

Create a translator function that can be used to replace the emoji

**Parameters**

-   `vocabulary` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** emoji vocabulary map

**Examples**

```javascript
import translator from 'emoji-translator';

const vocabulary = { '🍏': 'Apple', '🍋': 'Lemon', '🍌': 'Banana' };
const translate = translator(vocabulary)
const string = translate('A 🍌 is normally sweeter than an 🍏')

console.log(string) // A Banana is normally sweeter than an Apple
```

Returns **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** the translation function converting strings containing emoji to plain text
