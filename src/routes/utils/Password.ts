import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"
import { BadRequest, FlipTextResult, PasswordResult } from "../../utils/Interfaces";


/**
 * Password route
 */
export default class PasswordRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "password",
                apiKey: authenticator.get_api_key(),
                route:  "password"
            }
        )
    }
    async run(length:number):Promise<PasswordResult | BadRequest> {
        if (length)
            return await this.GET(["text", String(length)])
        else
            return await this.GET()

    }
}