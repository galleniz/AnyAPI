/**
 * Api Auth interface
 */
export interface ApiAuth {
    api_key:string | undefined;
}
/**
 * Route basic info
 */
export interface RouteData {
    name:string;
    apiKey:string | undefined;
    route:string;
}
/**
 *  any animals route result go here!
 */
export interface AnimalsResult {
    message:string ;
    image  :string ;
    fact   :string;
    status :number;
}
/**
 * Any result for the cuttie section go here~
 */
export interface AnimeResult {
    image  :string;
    status :number;
}
/**
 * Binary results, ig
 */
export interface BinaryResult {
    message	:string
    text	:string
    binary	:string
    status	:number
}
/**
 * Ohh, bad request :,c
 */
export interface BadRequest {
    message:string
    status :number
    error	:string
    example	:string
}
/**
 * Cuando you flip the coin:
 */
export interface CoinflipResult {
    message	:string
    result	:string
    status	:number
}
/**
 * Encode result from the route base64 / encode
 */
export interface EncodeResult {
    message	:string
    text	:string
    base64	:string
    status	:number
}
/**
 * Flip text !
 */
export interface FlipTextResult {
    message	:string
    text	:string
    flipped	:string
    status	:number
}
/**
 * This is the passwor result, i think
 */
export interface PasswordResult {
    message	:string
    password	:string
    length	:number
    status	:number
}
/**
 * Upload route, with the cdn URL
 */
export interface UploadResult {
    message :string
    name    :string
    url     :string
    status  :number
    
}
/**
 * Bad request :c
 */
export interface UploadResultBadRequest {
    message :string
    status  :number
}
/**
 * The seame of the upper, but with errore!!
 */
export interface UploadError {
    error : string
    status: number
}