
var tape = require('tape')
var npmUrl = require('../npm-url')

function t (input, expected) {
  return tape(input + ' -> ' + expected, function (t) {
    t.equal(npmUrl(input), expected)
    t.end()
  })
}


t('curry@1.2.0', 'https://registry.npmjs.org/curry/-/curry-1.2.0.tgz')
t('highlight.js@8.0.0', 'https://registry.npmjs.org/highlight.js/-/highlight.js-8.0.0.tgz')
t('JSONStream@6.2.0', 'https://registry.npmjs.org/JSONStream/-/JSONStream-6.2.0.tgz')

//git urls are already tested in npm-github-url-resolve
