const route = require("../../route")
const error = require("../../utils/Error")
const Authenticator = require("../../Auth")
const axios = require("axios")

/**
 * Doggy route
 * Show a random dog image and facts
 */
class DogRoute extends route
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
                name: "dog",
                apikey: authenticator.get_api_key(),
                route:  "dog"
            }
        )
    }
    /**
     * Get an dog!
     * Show a random dog image and facts
     * 
     * @returns {String|error} dog
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
module.exports = DogRoute;