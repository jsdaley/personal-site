var template = require('./template.hbs');
var Marionette = require('backbone.marionette');

var SplashView = Marionette.ItemView.extend({
  template: template
});

module.exports = SplashView;