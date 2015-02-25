'use strict';

var Lab   = require('lab')
var Code  = require('code')

var resolve = require('./')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

describe('module-resolve', function() {
  describe('resolve', function() {
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

  describe('load', function() {
    it('should load a module', function(done) {
      expect(resolve.load('lab')).to.be.an.object()
      done()
    })
    it('should not load a module', function(done) {
      expect(resolve.load('AH')).to.be.undefined()
      done()
    })
  })
})
