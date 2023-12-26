// TODO: Authenticator better login system

class Auth 
{
    /**
     * Auth constructor
     * 
     * @param {{api_key: string}} settings 
     * 
     */
    constructor(settings)
    {
        /**
         * Used for some routes.
         * 
         * @readonly
         */
        this.api_key = settings.api_key
    }
    /**
     * @returns {String} API_KEY
     * @readonly
     */
    get_api_key()
    {
        return this.api_key;
    }
}
module.exports = Auth;