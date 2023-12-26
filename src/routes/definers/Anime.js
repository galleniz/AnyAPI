const hug = require("../anime/hug")
const pat = require("../anime/pat")
const wink = require("../anime/wink")

class Anime {

    constructor(authenticator)
    {
        this.authenticator = authenticator;
    }
    /**
     * Get a Anime Hug?
     * 
     * @returns {String} GIF
     */
    async hug()
    {
        const hug_ = new hug(this.authenticator)
        return await hug_.GET();
    }
    /**
     * Get a Anime Wink?
     * 
     * @returns {String} GIF
     */
    async wink()
    {
        const win_k = new wink(this.authenticator)
        return await win_k.GET();
    }
    /**
     * Get a Anime Pat?
     * 
     * @returns {String} GIF
     */
    async pat()
    {
        const _a = new pat(this.authenticator)
        return await _a.GET();
    }
}
module.exports = Anime;