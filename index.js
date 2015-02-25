'use strict'

module.exports = resolve

function resolve (moduleName) {
  try {
    return !!require.resolve(moduleName)
  } catch (ex) {
    return false
  }
}

module.exports.load = load

function load (moduleName) {
  if (resolve(moduleName)) {
    return require(moduleName)
  }
}
