var template = require('./template.hbs');
var Marionette = require('backbone.marionette');
var $ = require('jquery');

var ContentView = Marionette.ItemView.extend({
  template: template,
  events: {
  	'click .modal-link': 'stopScroll'
  },
  stopScroll: function() {
  	$('body').css('overflow', 'hidden');
  }
});

module.exports = ContentView;