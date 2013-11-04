// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/lodash');
require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
var color = require('../../vendor/jquery.color');
require('../utilities/observers');
var Spinner = require('../../spin');

var App = Ember.Application.create({
  rootElement: "#application",
    dimFilters: [],
    hideFilters: []
});

App.LoadingRoute = Ember.Route.extend({
  renderTemplate: function() {
    if(this.router._activeViews.application){
      return this.render({ "into" : "application", "outlet" : "loading"});
    }
    this.render("loading");
  }
});

App.LoadingView = Ember.View.extend({
  didInsertElement: function(){
    $("body").addClass("fullscreen-open")
  var opts = {
    lines: 13, // The number of lines to draw
  length: 0, // The length of each line
  width: 6, // The line thickness
  radius: 14, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 19, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#4a3e93', // #rgb or #rrggbb or array of colors
  speed: 0.3, // Rounds per second
  trail: 42, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: true, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '100px', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
  };
new Spinner(opts).spin(this.$().get(0))
  return this._super();
  },
    willDestroyElement: function(){
      $("body").removeClass("fullscreen-open")
        return this._super();
    }
});

App.deferReadiness();

module.exports = App;

