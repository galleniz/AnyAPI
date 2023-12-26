const route = require("../../route")
const error = require("../../utils/Error")
const axios = require("axios")
const Authenticator = require("../../Auth")
/**
 * Kitty route
 * Show a random cat image and facts
 */
class CatRoute extends route
{
    /**
     * Constructor
     * 
     * @param {Authenticator} authenticator 
     */
    constructor(authenticator)
    {
        if (!authenticator)
            throw new error("Not have an Authenticator in the client", "CHNA");
        super(
            {
                name: "cat",
                apikey: authenticator.get_api_key(),
                route:  "cat"
            }
        )
    }
    /**
     * Get an cat!
     * Show a random cat image and facts
     * 
     * @returns {String|error} cat
     */
    async GET()
    {
        const response =await axios
        .get(`https://api.any-bot.xyz/api/v1/${this.route}`)
        .then((res) => res.data)
        .catch((err) => {
            return new error("The API is down", "BID")
        });
         return response
    }
  
  
}
module.exports = CatRoute;