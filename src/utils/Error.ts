
export default class Error {
    constructor(message:string, code: string)
    {
        throw {message,code}
    }
}
module.exports = Error