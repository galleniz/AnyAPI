const route = require("../../route")
const error = require("../../utils/Error")
const Authenticator = require("../../Auth")
const axios = require("axios")


/**
 * Hug route
 */
class FlipText extends route
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
                name: "password",
                apikey: authenticator.get_api_key(),
                route:  "password"
            }
        )
    }
    /**
     * 
     * @returns {String|error} wink
     */
    async GET(length)
    {
        if (!length)
        length = 8;
        const response =await axios
        .get(`https://api.any-bot.xyz/api/v1/${this.route}/?length=${length}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
            return new error("The API is down", "BID")
        });
         return response
    }
  
  
}
module.exports = FlipText;