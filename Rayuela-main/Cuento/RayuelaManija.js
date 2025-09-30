import fs from "fs";

var orden = fs.readFileSync("orden.txt", "utf-8")
const ordenp=orden.split("\r\n")
let texto =  "";
for (let i = 0; i <ordenp.length ; i++){
    texto = fs.readFileSync("Cuento/parte" + ordenp[i] + ".txt", "utf-8");
    console.log(texto);
}
fs.writeFileSync("cuento.txt", texto)