import { RouteData } from "../utils/Interfaces"
import axios, { AxiosHeaders } from "axios"
import Error from "../utils/Error"
export default class Route {
    name: string
    route: string
    apikey: string | undefined;
    constructor(options:RouteData)
    {
        this.name = options.name
        this.apikey = options.apiKey
        this.route = options.route
       
    
    }
    async GET(...query:Array<Array<string>>):Promise<any | undefined>{
        const q:Array<string> = [];
        query.forEach(data=>{
            q.push(data.join("="))
        })
        const response =await axios
        .get(`https://api.any-bot.xyz/api/v1/${this.route}${q.length > 0 ? `?${q.join("&")}` : ``}`)
        .then((res) => res.data)
        .catch((err) => {
            console.log(err)
            return new Error("The API is down", "BID")
        });
         return response
    }
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