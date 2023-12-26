# Any API 
> based on [MDCYT/Any-Bot](https://github.com/MDCYT/Any-Bot/)

AnyAPI is an API interactor of [MDCYT/Any-API](https://github.com/MDCYT/Any-API/) by [MDC](https://github.com/MDCYT)

## Usage

> Basic constructor & login
```javascript
const { Client } = require("anyapi")

const myAnyAPIClient = new Client({api_key: process.env.API_KEY || undefined});
global.myAnyAPIClient = myAnyAPIClient;

myAnyAPIClient.animals.dog().then(data=>{
    console.log(data); 
});
```

> With out api key login 
```javascript
const myAnyAPIClient = new Client();
```

> With API key
```javascript
// use an valid API key, this isnt valid xdd
const api_key = "API_KEY";
const myAnyAPIClient = new Client({api_key})
```