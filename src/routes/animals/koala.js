const route = require("../../route")
const error = require("../../utils/Error")
const axios = require("axios")
const Authenticator = require("../../Auth")

/**
 * Koala route
 */
class KoalaRoute extends route
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
                name: "koala",
                apikey: authenticator.get_api_key(),
                route:  "koala"
            }
        )
    }
    /**
     * Get an koala!
     * 
     * @returns {String|error} koala
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
module.exports = KoalaRoute;