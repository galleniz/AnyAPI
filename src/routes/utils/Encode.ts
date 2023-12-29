import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"
import { BadRequest, EncodeResult } from "../../utils/Interfaces";


/**
 * Encode route
 */
export default class EncodeRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "base64",
                apiKey: authenticator.get_api_key(),
                route:  "base64"
            }
        )
    }
    async run(text:string):Promise<EncodeResult | BadRequest> {
        if (text)
            return await this.GET(["text", text])
        else
            return await this.GET()

    }
}