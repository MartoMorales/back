
import { generarEspacio } from "./busqueda.js";
let nombres = generarEspacio(100)

for (var i = 0; i<nombres.length; i++)
{
    console.log(nombres[i])

    if (nombres[i] === "Wally")
{
  console.log("Wally está en la posición " + i) 
}
}
for (var i = 0; i<nombres.length;i++)
{
  if (nombres[i].indexOf("W")===0)
  {
    console.log("Hay un nombre que empieza con 'W' en la posición " + i)
  }
}
for (var i = 0; i<nombres.length;i++)
{
  if (nombres[i].includes("ll"))
  {
    console.log("Hay un nombre con 'll' en la posición" + i)
  }
}
