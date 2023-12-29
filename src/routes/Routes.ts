import Auth from "../iteractors/Auth"
import Error from "../utils/Error"
import Animals from "./sections/Animals"
import Anime from "./sections/Anime"
import Utils from "./sections/Utils"


export default class Routes {
  /**
   * Authenticator class manager
   */
   readonly authenticator: Auth;
    /**
     * Anime class, with the routes.
     */
   readonly anime: Anime;
    /**
     * Animal class, with the routes.
     */
   readonly animals: Animals
   /**
    * Utils class, with utility routes
    */
   readonly utils: Utils
   /**
     * Constructor of routes, it makes a new class of Routes, and
     * creates the manager
     */
   constructor(authenticator: Auth)
   {
       if (!authenticator)
           throw new Error("Not have an Authenticator in the client", "CHNA");
     
        this.authenticator = authenticator;

      
        this.anime = new Anime(authenticator);
       
        this.utils = new Utils(authenticator);
       
        this.animals = new Animals(authenticator);
   
   }
   
}

module.exports = Routes