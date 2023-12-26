const route = require("../../route")
const error = require("../../utils/Error")
const Authenticator = require("../../Auth")
const axios = require("axios")

// OSOS
/**
 * Bear route
 */
class BearRoute extends route
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
                name: "bear",
                apikey: authenticator.get_api_key(),
                route:  "bear"
            }
        )
    }
    /**
     * Get an bear!
     * 
     * @returns {String|error} bear
     */
    async GET()
    {
        const response =await axios
        .get(`https://api.any-bot.xyz/api/v1/${this.route}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
            return new error("The API is down", "BID")
        });
         return response
    }
  
  
}
module.exports = BearRoute;