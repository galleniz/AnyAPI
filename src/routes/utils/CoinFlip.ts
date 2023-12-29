import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"
import { CoinflipResult } from "../../utils/Interfaces";


/**
 * Bear route
 */
export default class CoinFlipRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "coinflip",
                apiKey: authenticator.get_api_key(),
                route:  "coinflip"
            }
        )
    }
    async run():Promise<CoinflipResult> {
        return await this.GET()
    }
}