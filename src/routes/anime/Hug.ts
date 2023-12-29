import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * Hug route
 */
export default class HugRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "hug",
                apiKey: authenticator.get_api_key(),
                route:  "hug"
            }
        )
    }

  
  
}