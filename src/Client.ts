
import Auth from "./iteractors/Auth";

import Animals from "./routes/sections/Animals";
import Anime from "./routes/sections/Anime";
import Utils from "./routes/sections/Utils";

import Routes from "./routes/Routes"

import { ApiAuth } from "./utils/Interfaces";

/**
 * AnyAPI client
 */
export default class Client {
  
    readonly api_key: string | undefined;
    readonly auth: Auth;
    readonly routes: Routes;
    readonly anime: Anime;
    readonly utils: Utils;
    readonly animals: Animals;
  
    constructor(settings: ApiAuth)
    {
        if (!settings) 
            settings = {
                api_key: undefined,
            }
      
        this.api_key = settings.api_key

    
        this.auth = new Auth(settings);
 
      
        this.routes = new Routes (this.auth)

        this.anime = this.routes.anime
        this.utils = this.routes.utils
        this.animals = this.routes.animals

    }
}
