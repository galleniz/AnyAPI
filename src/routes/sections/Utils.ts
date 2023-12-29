import Auth from "../../iteractors/Auth";
import Error from "../../utils/Error";
import { BadRequest, BinaryResult, CoinflipResult, EncodeResult, FlipTextResult, PasswordResult, UploadError, UploadResult, UploadResultBadRequest } from "../../utils/Interfaces";

import BinRoute from "../utils/Binary";
import CoinFlipRoute from "../utils/CoinFlip";
import EncodeRoute from "../utils/Encode";
import FliptextRoute from "../utils/FlipText";
import PasswordRoute from "../utils/Password";
import UploadRoute from "../utils/Upload";


export default class Utils {
    readonly authenticator: Auth;
   /**
     * Constructor of utils, yeah, im not very creative for the names
     * 
     */
   constructor(authenticator:Auth)
   {
       if (!authenticator)
           throw new Error("Not have an Authenticator in the client", "CHNA");
    
        this.authenticator = authenticator;
   }
    /**
     * Flip the text
     * For example: "Papu", flipped as: "upaP"
     */
    async flipText(text:string):Promise<FlipTextResult | BadRequest>
    {
        const flipText = new FliptextRoute(this.authenticator)
        return await flipText.run(text);
    }

    /**
    * Encrypt the text to base64
    * For example: "Papu", encoded as: "UGFwdQ=="
    */
    async encryptText(text:string):Promise<EncodeResult | BadRequest>
    {
        const encrypt = new EncodeRoute(this.authenticator)
        return await encrypt.run(text);
    }
    /**
    * Encode the text to binary
    * For example: "Papu", encoded as: "1110000 1100001 1110000 1110101
    */
    async binText(text:string):Promise<BinaryResult | BadRequest>
    {
        const bin = new BinRoute(this.authenticator)
        return await bin.run(text);
    }
    /**
     * A random result of 50/50
     * 
     * @returns a side
     */
    async flipACoin():Promise<CoinflipResult>
    {
        const coin = new CoinFlipRoute(this.authenticator)
        return await coin.run();
    }
    /**
    * Generate a password
    */
    async password(length:number):Promise<PasswordResult | BadRequest>
    {
        const pass = new PasswordRoute(this.authenticator)
        return await pass.run(length);
    }

    /**
     * Uploads an File into API
     */
    async upload(url:string,name:string,id:string):Promise<UploadResult | UploadError | UploadResultBadRequest>
    {
        const up = new UploadRoute(this.authenticator)

        return await up.run(url,name,id);
    }
}