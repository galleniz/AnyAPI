import { RouteData } from "../utils/Interfaces"
import axios, { AxiosHeaders } from "axios"
import Error from "../utils/Error"
/**
 * Basic route, used from any route, on any... api?
 */
export default class Route {
    /**
     * The name, this is more optional, but i created it because i am dumb
     */
    name: string
    /**
     * Route path, this uses when you make a GET, or POST; like https://api.any-bot.xyz/api/v1/dog
     */
    route: string
    /**
     * Api key, uhm, api key.
     */
    apikey: string | undefined;
    constructor(options:RouteData)
    {
        this.name = options.name
        this.apikey = options.apiKey
        this.route = options.route
       
    
    }
    /**
     * GET method, used to make a request using axios
     * 
     * @param query the head top thing, like ?text=hai+hai+hai
     * @returns The data of the result, is any because, yeah
     */
    async GET(...query:Array<Array<string>>):Promise<any | undefined>{
        const q:Array<string> = [];
        query.forEach(data=>{
            q.push(data.join("="))
        })
        
            const response =await axios
            .get(`https://api.any-bot.xyz/api/v1/${this.route}${q.length > 0 ? `?${q.join("&")}` : ``}`,this.apikey ? {
                headers: new AxiosHeaders(JSON.stringify(  {
                    API_KEY: this.apikey,
                  },))
            } : undefined)
            .then((res) => res.data)
            .catch((err) => {
                console.log(err)
                return new Error("The API is down", "BID")
            });
         
        
       
         return response
    }
    /**
     * POST method, used to make a request using axios
     * NOTE: this NEEDS the api key
     * 
     * @param query the head top thing, like ?text=hai+hai+hai
     * @returns The data of the result, is any because, yeaha
     */
    async POST(...query:Array<Array<string>>):Promise<any | undefined> {
        if (!this.apikey) {
            console.warn("The key as:", this.apikey, "is not a valid api key.\nIf you don't have an API_KEY you can get one here: http://api.any-bot.xyz/get-apikey \n\nTo see the documentation enter in: https://docs.api.any-bot.xyz/")
            return;
        }
        const q:Array<string> = [];
        query.forEach(data=>{
            q.push(data.join("="))
        })

        const response =await axios
        .post(
          `https://api.any-bot.xyz/api/v1/${this.route}${q.length > 0 ? `?${q.join("&")}` : ``}`,
          undefined,
          {
            headers: new AxiosHeaders(JSON.stringify(  {
                API_KEY: this.apikey,
              },))
          }
        )
        .then(async (res:any) => {
            return res;
        })
        .catch(async () => {
            return new Error("Bad api response: the api is down", "AID");
        });
    }
   
}