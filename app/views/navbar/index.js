var template = require('./template.hbs');
var Marionette = require('backbone.marionette');

var NavbarView = Marionette.ItemView.extend({
  template: template
});

module.exports = NavbarView;