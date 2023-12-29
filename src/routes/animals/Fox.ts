import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * Fox route
 */
export default class FoxRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "fox",
                apiKey: authenticator.get_api_key(),
                route:  "fox"
            }
        )
    }

  
  
}