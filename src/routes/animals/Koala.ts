import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"


/**
 * koala route
 */
export default class KoalaRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "koala",
                apiKey: authenticator.get_api_key(),
                route:  "koala"
            }
        )
    }

  
  
}