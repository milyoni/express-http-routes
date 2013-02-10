var _ = require('underscore')._;

module.exports.all = {};
module.exports.route = function(routeDefinition) {
  return module.exports.all[routeDefinition];
};
module.exports.attach = function(params) {
  for (var routeDefinition in this.all) {
    var routeHandler = this.all[routeDefinition];
    var routeParts = routeDefinition.split(" ");
    var routeVerb = routeParts[0].toLowerCase();
    var routePath = routeParts.slice(1).join(" ");

    var routeHandlerOverride = params.override ?
      params.override(routeDefinition, routeHandler) :
      routeHandler;
    params.app[routeVerb](routePath, routeHandlerOverride);
  }
};
