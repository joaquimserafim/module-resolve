'use strict';

var Lab   = require('lab')
var Code  = require('code')

var resolve = require('./')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

describe('resolve module', function() {
  it('not found', function(done) {
    expect(resolve('express')).to.be.false()
    done()
  })
  it('found', function(done) {
    expect(resolve('lab')).to.be.true()
    done()
  })
})
