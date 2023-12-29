import Auth from "../../iteractors/Auth";
import { AnimeResult } from "../../utils/Interfaces";
import HugRoute from "../anime/Hug";
import PatRoute from "../anime/Pat";
import WinkRoute from "../anime/Wink";


export default class Anime {
    authenticator: Auth;

    constructor(authenticator: Auth)
    {
        this.authenticator = authenticator;
    }
    /**
     * Get a Anime Hug?
     */
    async hug():Promise<AnimeResult | undefined>
    {
        const hugData = new HugRoute(this.authenticator)
        return await hugData.GET();
    }
    /**
     * Get a Anime Wink?
     */
    async wink():Promise<AnimeResult | undefined>
    {
        const winkData = new WinkRoute(this.authenticator)
        return await winkData.GET();
    }
    /**
     * Get a Anime Pat?
     */
    async pat():Promise<AnimeResult | undefined>
    {
        const pat = new PatRoute(this.authenticator)
        return await pat.GET();
    }
}