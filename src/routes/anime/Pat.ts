import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * pat route
 */
export default class PatRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "pat",
                apiKey: authenticator.get_api_key(),
                route:  "pat"
            }
        )
    }

  
  
}