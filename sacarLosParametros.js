
const fs = require("fs");
const path = require("path");
const files = ['index.ts'];

const elPepe  = (dir) => {
    fs.readdirSync(dir).forEach(file =>{
        if (file.endsWith(".js") || file.endsWith(".ts") || file.endsWith(".json")) {
            files.push(dir +"/"+ file);
        } else {
            elPepe(dir +"/"+ file);
        }
    })
}

elPepe("src");


const data = require("./tsconfig.json")

data.typedocOptions.entryPoints = files;

fs.writeFile("./tsconfig.json", JSON.stringify(data, undefined, " "),
(err)=> {
if (err) console.log(err);
}
)
