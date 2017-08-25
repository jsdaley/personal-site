var template = require('./template.hbs');
var Marionette = require('backbone.marionette');
var $ = require('jquery');

var ModalView = Marionette.ItemView.extend({
  template: template,
  events: {
  	'click .close': 'startScroll'
  },
  startScroll: function() {
		$('body').css('overflow', 'auto');
  }
});

module.exports = ModalView;