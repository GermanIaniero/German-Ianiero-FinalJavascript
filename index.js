

console.log(document)

const tituloPrincipal = document.getElementById("titulo-principal")
console.log(tituloPrincipal)
console.log(typeof tituloPrincipal)

const containers = document.getElementsByClassName("container3")
console.log(container3)

const div = document.getElementsByTagName("li")
console.log(div)

const tituloQuerySelector = document.querySelector("#titulo-principal")

const containerQuerySelector = document.querySelectorAll(".container3")
const divQuerySelector = document.querySelectorAll("div")

console.log(tituloQuerySelector)
console.log(containerQuerySelector)
console.log(divQuerySelector)


console.log(document)

const container = document.querySelector(".container3")

const card = document.createElement("div")

card.className = "tarjeta"

card.textContent = "stockProductos"

console.log(card)

