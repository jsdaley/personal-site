var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var $ = require('jquery');
Backbone.$ = $;
window.jQuery = $;


var mainAppLayout = require('./views/mainAppLayout');

var _ = require('underscore');

var MainController = require('./controllers/main');

var Navbar = require('./views/navbar')
var Footer = require('./views/footer')


var appController = Marionette.Controller.extend({
  initialize: function() {
    _.bindAll(this, 'main');
    mainAppLayout.render();
    var navbar = new Navbar();
    var footer = new Footer();
    mainAppLayout.navbar.show(navbar);
    mainAppLayout.footer.show(footer);
    $('body').html(mainAppLayout.el);
  },
  main: function() {
    new MainController().index();
  }
});

var CitadelRouter = Marionette.AppRouter.extend({
  appRoutes: {
    '': 'main',
  }
});

$(function() {
  new CitadelRouter({controller: new appController});
  Backbone.history.start();
});