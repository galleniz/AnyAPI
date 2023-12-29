"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = require("../utils/Error");
var Animals_1 = require("./sections/Animals");
var Anime_1 = require("./sections/Anime");
var Utils_1 = require("./sections/Utils");
var Routes = /** @class */ (function () {
    /**
      * Constructor of routes
      */
    function Routes(authenticator) {
        if (!authenticator)
            throw new Error_1.default("Not have an Authenticator in the client", "CHNA");
        this.authenticator = authenticator;
        this.anime = new Anime_1.default(authenticator);
        this.utils = new Utils_1.default(authenticator);
        this.animals = new Animals_1.default(authenticator);
    }
    return Routes;
}());
exports.default = Routes;
module.exports = Routes;
