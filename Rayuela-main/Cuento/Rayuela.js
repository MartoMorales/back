import fs from "fs"

var Partes = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136]
var lectura = [

]

for (var i= 0; i<Partes.length;i++)
{
    var lecturadei= fs.readFileSync("parte"+Partes[i]+".txt", "utf-8")
    lectura.push(lecturadei)

}
fs.writeFileSync("Rayuela.txt", JSON.stringify(lectura))