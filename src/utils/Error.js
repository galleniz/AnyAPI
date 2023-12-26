const axios = require("axios")

class Error {
    constructor(message, code)
    {
        throw {message,code}
    }
}
module.exports = Error