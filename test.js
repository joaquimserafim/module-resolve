'use strict';

var Lab   = require('lab')
var Code  = require('code')

var resolve = require('./')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

describe('resolve module', function() {
  it('should not find', function(done) {
    expect(resolve('express')).to.be.false()
    done()
  })

  it('should find', function(done) {
    expect(resolve('lab')).to.be.true()
    done()
  })

  it('passing an incorrect path should not find', function(done) {
    expect(resolve('./node_modules/lab/node_modules/istanbul')).to.be.false()
    done()
  })

  it('passing a correct path should find', function(done) {
    expect(resolve('./node_modules/lab/node_modules/bossy')).to.be.true()
    done()
  })
})
