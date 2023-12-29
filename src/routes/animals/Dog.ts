import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * Dog route
 */
export default class DogRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "dog",
                apiKey: authenticator.get_api_key(),
                route:  "dog"
            }
        )
    }

  
  
}