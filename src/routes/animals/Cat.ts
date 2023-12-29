import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * Cat route
 */
export default class CatRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "cat",
                apiKey: authenticator.get_api_key(),
                route:  "cat"
            }
        )
    }

  
  
}