import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * Bird route
 */
export default class BirdRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "bird",
                apiKey: authenticator.get_api_key(),
                route:  "bird"
            }
        )
    }

  
  
}