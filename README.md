# module-resolve

use the **require.resolve** to look up the location of a module but return **true** in case of finding or **false** in case of not finding

<a href="https://nodei.co/npm/module-resolve/"><img src="https://nodei.co/npm/module-resolve.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/module-resolve)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/module-resolve/blob/master/LICENSE)


## API
`var resolve = require('module-resolve')`

**resolve(*module:string*)** - verify module is installed

*   module - can be the name of the module or the path

**resolse.load(*module:string*)** - require/load the module

*   module - can be the name of the module or the path

## Usage

```js
var resolve = require('module-resolve')

// `npm i express`

// should return true
resolve('express')
// should return false
resolve('qs')
// should return true
resolve('./node_modules/express/node_modules/qs')

// the same as `var express = require('express')`
// instead throwing an error returns "undefined" if module is not installed
var express = resolve.load('express')

```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
