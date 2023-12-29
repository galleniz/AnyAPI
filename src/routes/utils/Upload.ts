import Auth from "../../iteractors/Auth"
import Route from "../../iteractors/Route"
import Error from "../../utils/Error"
import { UploadError, UploadResult, UploadResultBadRequest } from "../../utils/Interfaces";


/**
 * Upload route
 * When you make an cdn attch?
 * 
 * WARNING: this works with api key
 */
export default class UploadRoute extends Route
{
    
    constructor(authenticator: Auth)
    {
        if (!authenticator)
            throw new Error("No authenticator", "BAU");
        super(
            {
                name: "upload",
                apiKey: authenticator.get_api_key(),
                route:  "upload"
            }
        )
    }
    async run(url:string,name:string,id:string):Promise<UploadResult | UploadResultBadRequest | UploadError> {
        return await this.POST(["url", url], ["name", name], ["id", id])

    }
}