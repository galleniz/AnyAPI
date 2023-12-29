export interface ApiAuth {
    api_key:string | undefined;
}

export interface RouteData {
    name:string;
    apiKey:string | undefined;
    route:string;
}
/**
 *  
 */
export interface AnimalsResult {
    message:string ;
    image  :string ;
    fact   :string;
    status :number;
}
export interface AnimeResult {
    image  :string;
    status :number;
}
export interface BinaryResult {
    message	:string
    text	:string
    binary	:string
    status	:number
}
export interface BadRequest {
    message:string
    status :number
    error	:string
    example	:string
}
export interface CoinflipResult {
    message	:string
    result	:string
    status	:number
}
export interface EncodeResult {
    message	:string
    text	:string
    base64	:string
    status	:number
}
export interface FlipTextResult {
    message	:string
    text	:string
    flipped	:string
    status	:number
}
export interface PasswordResult {
    message	:string
    password	:string
    length	:number
    status	:number
}
export interface UploadResult {
    message :string
    name    :string
    url     :string
    status  :number
    
}
export interface UploadResultBadRequest {
    message :string
    status  :number
}
export interface UploadError {
    error : string
    status: number
}