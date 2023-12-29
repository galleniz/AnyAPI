
import {Client, A} from "./index";

const client = new Client({
    api_key: ""
})

doThePapu(client)

async function doThePapu(client : Client){
console.log(await client.animals.bear())
console.log(await client.animals.bird())
console.log(await client.animals.cat())
console.log(await client.animals.dog())
console.log(await client.animals.fox())
console.log(await client.animals.koala())

console.log(await client.anime.hug())
console.log(await client.anime.pat())
console.log(await client.anime.wink())


console.log(await client.utils.binText("Hola mundo"))
console.log(await client.utils.encryptText("Hola mundo"))
console.log(await client.utils.flipText("Hola mundo"))
console.log(await client.utils.password(12))
console.log(await client.utils.flipACoin())
console.log("Programa finalizado.")
}

A();
