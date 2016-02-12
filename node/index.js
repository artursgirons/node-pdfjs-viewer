module.exports = function() {
  var express = require('express');
  var path = require('path');
  var app = express();

  var assetsPath = path.resolve(__dirname, path.relative(__dirname, './'), 'node_modules/node-pdfjs-viewer/assets')

  app.use(express.static(assetsPath))

  return app
}
