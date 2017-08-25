var template = require('./template.hbs');
var Marionette = require('backbone.marionette');

var MainAppLayout = Marionette.Layout.extend({
  template: template,
  regions: {
    navbar: '#navbar',
    splash: '#splash',
    mainPage: '#mainpage',
    modal: '#modal',
    footer: '#footer'
  }
});

module.exports = new MainAppLayout;