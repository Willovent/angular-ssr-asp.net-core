const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;
const appServer = require('./dist-server/main.bundle');
const readFileSync = require('fs').readFileSync;
const file = readFileSync('./wwwroot/index.html').toString();
require('zone.js');

module.exports = function (callback, path) {
  renderModuleFactory(appServer.AppServerModuleNgFactory, {
    document: file,
    url: path
  }).then(body => {
    callback(null, body);
  });
}
