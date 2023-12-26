const route = require("../../route")
const error = require("../../utils/Error")
const Authenticator = require("../../Auth")
const axios = require("axios")


/**
 * Hug route
 */
class Encode extends route
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
                name: "base64",
                apikey: authenticator.get_api_key(),
                route:  "base64"
            }
        )
    }
    /**
     * 
     * @returns {String|error} wink
     */
    async GET(text)
    {
        if (!text)
            text = "papu";
        const response =await axios
        .get(`https://api.any-bot.xyz/api/v1/${this.route}/?text=${text}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
            return new error("The API is down", "BID")
        });
         return response
    }
  
  
}
module.exports = Encode;