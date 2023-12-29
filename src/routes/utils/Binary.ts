import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"
import { BinaryResult, BadRequest } from "../../utils/Interfaces";


/**
 * Bear route
 */
export default class BinRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "binary",
                apiKey: authenticator.get_api_key(),
                route:  "binary"
            }
        )
    }
    async run(text:string):Promise<BinaryResult | BadRequest> {
        if (text)
            return await this.GET(["text", text])
        else
            return await this.GET()

    }
}