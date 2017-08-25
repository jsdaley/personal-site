var Marionette = require('backbone.marionette');
var mainAppLayout = require('../views/mainAppLayout');

var Splash = require('../views/splash');
var Content = require('../views/mainpage');
var Modal = require('../views/modal');


var MainController = Marionette.Controller.extend({
  initialize: function() {
    this.layout = mainAppLayout;
  },
  index: function() {
    var splash = new Splash();
    var content = new Content();
    var modal = new Modal();

    this.layout.splash.show(splash);
    this.layout.mainPage.show(content);
    this.layout.modal.show(modal);
  }
});

module.exports = MainController;