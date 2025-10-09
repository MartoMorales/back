import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";
import fs from 'fs'
// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores = fs.readFileSync("data/sabores.json", "utf-8");
let productos = fs.readFileSync("data/productos.json", "utf-8");

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);

let pedidos = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"))
pedidos.push (cliente)
pedidos.push (producto)
pedidos.push (gustos)
pedidos.push (saboresElegidos)

let guardar = JSON.stringify(pedidos)
fs.writeFileSync("data/pedidos.json", guardar)