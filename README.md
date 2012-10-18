express-http-routes
===================

Modular HTTP routes for express.

This library allows you to define and reuse route handlers.

# Usage

users.js

    var routes = require("express-http-routes");

    routes.all["GET /users/:user_id"] = function(request, response) {
      // ...
    }

    routes.all["GET /users/:user_id/special-logging"] = function(request, response) {
      // Do something a bit different

      return routes.route("GET /users/:user_id")(request, response);
    }

    routes.all["POST /users"] = function(request, response) {
      // ...
    }


app.js

    var express = require('express'),
      , global.app = express();

    require("express-http-routes").attach(global.app);
