
const Auth = require("./Auth");
const route = require("./route");
const Error = require("./utils/Error");
const Routes = require("./routes/Routes")


const Utils = require("./routes/definers/Utils");
const Animals = require("./routes/definers/Animals");
const Anime = require("./routes/definers/Anime");
/**
 * Im dumb djslkajdkl
 */
const API_KEY = String
/**
 * AnyAPI client
 */
class Client {
    /**
     * AnyApi Client
     * 
     * @param {{api_key: string}} settings 
     */
    constructor(settings)
    {
        if (!settings) 
            settings = {
                api_key: undefined,
            }
        /**
         * used for some routes.
         * 
         * @type {API_KEY}
         * @readonly 
         */
        this.api_key = settings.api_key

        /**
         * Authenticator for AnyAPI
         * 
         * @type {Auth}
         * @readonly 
         */
        this.auth = new Auth(settings);
        if (!this.api_key)
          console.warn("The key as:", this.api_key, "is not a valid api key.\nIf you don't have an API_KEY you can get one here: http://api.any-bot.xyz/get-apikey\nTo see the documentation enter in: https://docs.api.any-bot.xyz/")
 
        /**
         * All the routes of AnyAPI
         * @type {Routes}
         */
        this.routes = new Routes(this.auth)
        /**
         * Anime class, with the routes.
         * @type {Anime}
         */
        this.anime =  this.routes.anime
        /**
         * Utils class, with the routes.
         * @type {Utils}
         */
        this.utils =   this.routes.utils
        /**
         * Utils class, with the routes.
         * @type {Animals}
         */
        this.animals = this.routes.animals

    }
}

module.exports = Client