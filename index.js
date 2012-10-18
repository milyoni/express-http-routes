var _ = require('underscore')._;

module.exports.all = {};
module.exports.route = function(routeDefinition) {
  return module.exports.all[routeDefinition];
};
module.exports.attach = function(app) {
  _.each(this.all, function(routeHandler, routeDefinition) {
    var routeParts = routeDefinition.split(" ");
    var routeVerb = routeParts[0].toLowerCase();
    var routePath = _.rest(routeParts).join(" ");

    app[routeVerb](routePath, routeHandler);
  }, module.exports);
};
