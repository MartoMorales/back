var agregado = document.getElementById ("agregar")
var puesto = document.getElementById("posicion")
var arquero = document.getElementById("arquero")
var defensor = document.getElementById("defensor")
var mediocampista = document.getElementById("mediocampista")
var delantero = document.getElementById("delantero")
var numero = document.getElementById("numero")
var boton = document.getElementById("botondeagregar")
boton.disabled = false
var Jugadores = []




function finalizar()
{
    document.getElementById("arquero").innerHTML = ""
    document.getElementById ("defensor").innerHTML= ""
    document.getElementById ("mediocampista").innerHTML= ""
    document.getElementById ("delantero").innerHTML= ""
    for(var i = 0; i<Jugadores.length;i++)
    {
        var posicion = Jugadores[i].Puesto
        console.log(posicion)
if (posicion == "arquero")
{
    var arqueros = document.createElement("li")
    arqueros.textContent = Jugadores[i].Nombre + " (" + Jugadores[i].Numero + ")"
    arquero.appendChild(arqueros)
}
else if (posicion == "defensor")
{
    var defensores = document.createElement("li")
    defensores.textContent = Jugadores[i].Nombre + " (" + Jugadores[i].Numero + ")"
    defensor.appendChild(defensores)
}
else if (posicion == "mediocampista")
{
    var mediocampistas = document.createElement("li")
    mediocampistas.textContent = Jugadores[i].Nombre + " (" + Jugadores[i].Numero + ")"
    mediocampista.appendChild(mediocampistas)
}
else if (posicion == "delantero")
{
    var delanteros = document.createElement("li")
    delanteros.textContent = Jugadores[i].Nombre + " (" + Jugadores[i].Numero + ")"
    delantero.appendChild(delanteros)
}
    }
}

function Limpiar()
{
 Jugadores = []
    console.log("Equipo Limpiado")
}

function Agregar()
{
Jugadores.push({
Nombre: agregado.value,
Puesto: puesto.value,
Numero:numero.value
})
console.log(Jugadores)

if (Jugadores.length >= 26)
{
    boton.disabled = true
} else
{
    boton.disabled = false
}
}

console.log(Jugadores.length)