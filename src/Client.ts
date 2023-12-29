
import Auth from "./iteractors/Auth";

import Animals from "./routes/sections/Animals";
import Anime from "./routes/sections/Anime";
import Utils from "./routes/sections/Utils";

import Routes from "./routes/Routes"

import { ApiAuth } from "./utils/Interfaces";

/**
 * AnyAPI client
 * Used to create the main interactor of the API, from url to ur app
 * 
 * To Login with token, just use it, idk, xdd
 */
export default class Client {
    /**
     * Api key, used for some routes likes `upload` or similars
     */
    readonly api_key: string | undefined;
    /**
     * Auth client, to check the login, porfavor MDC haz un comprobador de URL, así mejoro esto
     */
    readonly auth: Auth;
    /**
     * The routes of the API, like anime, utils & animals
     */
    readonly routes: Routes;
    /**
     * Anime section, with the routes, wink, hug, pat
     */
    readonly anime: Anime;
    /**
     * Utility section, with some improves utils !11!
     */
    readonly utils: Utils;
    /**
     * Animals, with random fun facts, random images referencial & more!
     */
    readonly animals: Animals;
    /**
     * Constructor for the client, super duper cool!
     * 
     * @param settings swag settings for the bot
     */
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
