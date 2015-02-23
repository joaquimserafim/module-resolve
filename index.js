'use strict'

module.exports = resolve

function resolve(moduleName) {
  try {
    return !!require.resolve(moduleName)
  } catch (ex) {
    return false
  }
}
