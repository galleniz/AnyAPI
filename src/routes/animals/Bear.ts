import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * Bear route
 */
export default class BearRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "bear",
                apiKey: authenticator.get_api_key(),
                route:  "bear"
            }
        )
    }

  
  
}