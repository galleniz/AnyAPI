import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * wink route
 */
export default class WinkRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "wink",
                apiKey: authenticator.get_api_key(),
                route:  "wink"
            }
        )
    }

  
  
}