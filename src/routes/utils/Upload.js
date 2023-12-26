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
     * @returns {String|error} 
     */
    async POST(url,name,id)
    {
        if (!url)
        throw new error("Not have an valid URL.", "UUUI"); // Utils/Upload/URL_INVALID error
        if (!id)
            id = Math.floor(Math.random() * 99999)
        if (!name)
            name = "Unnamed_"  + id
        if (!this.apikey)
        throw new error("You don't have a API_KEY .", "AIN"); // APIKEY_IS_NULL

        const response =await axios
        .post(
          `${apiUrl}/upload?url=${url}&name=${name}&id=${id}`,
          undefined,
          {
            headers: {
              API_KEY: this.apikey,
            },
          }
        )
        .then(async (res) => {
            return res;
        })
        .catch(async () => {
            console.error("An error publishing the link",url)
            return url;
        });
        return response;
    }
  
  
}
module.exports = FlipText;