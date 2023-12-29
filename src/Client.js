"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auth_1 = require("./iteractors/Auth");
var Routes_1 = require("./routes/Routes");
/**
 * AnyAPI client
 */
var Client = /** @class */ (function () {
    function Client(settings) {
        if (!settings)
            settings = {
                api_key: undefined,
            };
        this.api_key = settings.api_key;
        this.auth = new Auth_1.default(settings);
        this.routes = new Routes_1.default(this.auth);
        this.anime = this.routes.anime;
        this.utils = this.routes.utils;
        this.animals = this.routes.animals;
    }
    return Client;
}());
exports.default = Client;
