// TODO: Authenticator better login system
import {ApiAuth} from "../utils/Interfaces";
export default class Auth 
{
    /**
     * Api key for the client, used on upload routes and similars
     */
    readonly api_key: string | undefined;

    constructor(settings: ApiAuth )
    {
     
        this.api_key = settings.api_key
    }
    /**
     * @returns {string} API_KEY
     * @readonly
     */
    get_api_key()
    {
        return this.api_key;
    }
}