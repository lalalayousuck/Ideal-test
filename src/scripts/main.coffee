window.jQuery = window.$ = require('jquery')

attachFastClick = require('fastclick')

docCookies = require('./lib/doc-cookies.js')
window.jade = require('./lib/pug-runtime')


require('./lib/component')
require('./components/share-btn')
require('./components/quiz2')
require('./ga')

data = require('./data/quiz')

attachFastClick(document.body)
$(document).ready -> 
  Component.vitalize()

