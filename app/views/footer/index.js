var template = require('./template.hbs');
var Marionette = require('backbone.marionette');

var FooterView = Marionette.ItemView.extend({
  template: template
});

module.exports = FooterView;