const axios = require("axios")
class Route {
    constructor(options)
    {
        this.name = options.name
        this.apikey = options.apikey
        this.route = options.route
       
    
    }
    GET(){
        console.log("No \"get\" method")
    }
   
}
module.exports = Route;