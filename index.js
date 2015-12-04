var path = require('path');

module.exports = {
  scss: [path.join(__dirname, 'sass')],
  fonts: [path.join(__dirname, 'fonts/**/*.{eot,svg,ttf,woff}')],
  baseCss: [path.join(__dirname, 'css/ratchet.min.css')],
  iosThemeCss: [path.join(__dirname, 'css/ratchet-theme-ios.min.css')],
  androidThemeCss: [path.join(__dirname, 'css/ratchet-theme-android.min.css')]
};