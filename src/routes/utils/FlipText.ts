import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"
import { BadRequest, FlipTextResult } from "../../utils/Interfaces";


/**
 * Fliptext route
 */
export default class FliptextRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "fliptext",
                apiKey: authenticator.get_api_key(),
                route:  "fliptext"
            }
        )
    }
    async run(text:string):Promise<FlipTextResult | BadRequest> {
        if (text)
            return await this.GET(["text", text])
        else
            return await this.GET()

    }
}