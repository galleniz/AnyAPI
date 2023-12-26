const route = require("../../route")
const error = require("../../utils/Error")
const Authenticator = require("../../Auth")
const axios = require("axios")

const Route = require("../../route");

const flipTextClass = require("../utils/FlipText")
const encodeClass = require("../utils/Encode")
const binaryClass = require("../utils/Binary")
const flipClass = require("../utils/CoinFlip")
const passwordClass = require("../utils/Password")
const upload = require("../utils/Upload")

class Utils {
   /**
     * Constructor
     * 
     * @param {Authenticator} authenticator 
     */
   constructor(authenticator)
   {
       if (!authenticator)
           throw new error("Not have an Authenticator in the client", "CHNA");
        /** 
        * @type {Authenticator} 
        **/
        this.authenticator = authenticator;
        /**
         * @type {Map<String,Route>}
         */
        this.routes = new Map()

 
   }
    /**
     * Flip the text
     * For example: "Papu", flipped as: "upaP"
     * @param {String} text 
     */
    async flipText(text)
    {
        if (!text)
            return {message: "NOT OK", status: -1, error: "Provide a valid text."}
        const flipText = new flipTextClass(this.authenticator)

        return await flipText.GET(text);
    }
    /**
    * Encrypt the text to base64
    * For example: "Papu", encoded as: "UGFwdQ=="
    * @param {String} text 
    */
    async encryptText(text)
    {
        if (!text)
            return {message: "NOT OK", status: -1, error: "Provide a valid text."}
        const flipText = new encodeClass(this.authenticator)

        return await flipText.GET(text);
    }
    /**
    * Encode the text to binary
    * For example: "Papu", encoded as: "UGFwdQ=="
    * @param {String} text 
    */
    async binText(text)
    {
        if (!text)
            return {message: "NOT OK", status: -1, error: "Provide a valid text."}
        const flipText = new binaryClass(this.authenticator)

        return await flipText.GET(text);
    }
    /**
     * 
     * @returns a side
     */
    async flipACoin()
    {
        const a = new flipClass(this.authenticator)

        return await a.GET();
    }
    /**
    * Generate a password
    * @param {Number} length 
    */
    async password(length)
    {
        if (!length || isNaN(Number(length)))
            return {message: "NOT OK", status: -1, error: "Provide a valid length."}

            
        const pass = new passwordClass(this.authenticator)

        return await pass.GET(length);
    }

    /**
     * Uploads an File into API
     * @param {String} url 
     * @param {String} name 
     * @param {String} id 
     */
    async upload(url,name,id)
    {
        if (!url)
        return {message: "NOT OK", status: -1, error: "Provide a valid url."}

        
        const up = new upload(this.authenticator)

        return await up.POST(url,name,id);
    }
}
module.exports = Utils