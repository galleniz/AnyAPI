> based on [MDCYT/Any-Bot](https://github.com/MDCYT/Any-Bot/)

AnyAPI is an API interactor of [MDCYT/Any-API](https://github.com/MDCYT/Any-API/) by [MDC](https://github.com/MDCYT)

## Usage

> Basic constructor & login
```typescript
import { Client } from "anybotapi";

const myAnyAPIClient = new Client({api_key: process.env.API_KEY});
```

> With out api key login 
```javascript
const myAnyAPIClient = new Client({api_key: undefined});
```

> With API key
```javascript
// use an valid API key, this isnt valid xdd
const api_key = "API_KEY";
const myAnyAPIClient = new Client({api_key})
```

### Using routes
> Example:
```typescript
    const data = await client.routes.anime.hug();
    console.log(data.image);
```
> Using animals fun facts
```typescript
    const data = await client.routes.animals.dog();
    console.log(data.fact);
```