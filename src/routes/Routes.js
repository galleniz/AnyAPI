const error = require("../utils/Error")
const Authenticator = require("../Auth")
const axios = require("axios")



const Anime = require("./definers/Anime")
const Animals = require("./definers/Animals")
const Utils = require("./definers/Utils")


class Routes {
   /**
     * Constructor
     * 
     * @param {Authenticator} authenticator 
     */
   constructor(authenticator,utils)
   {
       if (!authenticator)
           throw new error("Not have an Authenticator in the client", "CHNA");
        /** 
        * @type {Authenticator} 
        **/
        this.authenticator = authenticator;

        /**
         * Anime class, with the routes.
         * @type {Anime}
         */
        this.anime = new Anime(authenticator);
        /**
         * Utils class, with the routes.
         * @type {Utils}
         */
        this.utils = new Utils(authenticator);
        /**
         * Utils class, with the routes.
         * @type {Animals}
         */
        this.animals = new Animals(authenticator);
   
   }
   
}

module.exports = Routes