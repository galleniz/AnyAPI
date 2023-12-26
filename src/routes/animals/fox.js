const route = require("../../route")
const error = require("../../utils/Error")
const Authenticator = require("../../Auth")
const axios = require("axios")

/**
 * Fox route
 */
class FoxRoute extends route
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
                name: "fox",
                apikey: authenticator.get_api_key(),
                route:  "fox"
            }
        )
    }
    /**
     * Get an fox!
     * 
     * @returns {String|error} fox
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
module.exports = FoxRoute;