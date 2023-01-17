let infoDelLs = JSON.parse(localStorage.getItem("carrito"))

const cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
          <div class="card" id="stockProductos-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.descrip}>
                </div>
                <h3>
                    ${element.descrip}
                </h3>
                <button id="boton-${element.id}" class="boton-card">
                    Eliminar
                </button>
            </div>
        `
    }, "")

    document.querySelector(".producto").innerHTML = generarNodos
}

cardHtml(infoDelLs || [])

function borrarDelCarrito (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)            
            const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id)
            })
            infoDelLs = filtrarProducto
            localStorage.setItem("carrito", JSON.stringify(infoDelLs))
            console.log(infoDelLs)    
            cardHtml(infoDelLs)
            borrarDelCarrito(infoDelLs)       
        }
        
    })
}

borrarDelCarrito(infoDelLs)

const botonBorrarCarrito = document.querySelector("#borrar-productos")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector(".producto").innerHTML = "no hay productos"
}








const contenedor = document.querySelector(".container")

cardHtml = ( array ) => {
    const generarNodos = array.reduce(( acc, element) => {
        return acc + `
            <div class="card" id="stockProductos-${element.id}">
                <div class="container-img">
                    <img src=${element.img} alt=${element.descrip}>
                </div>                
                <h3>
                    ${element.descrip}
                </h3>
                <button id="boton-${element.id}" class="boton-card">
                    Añadir al carrito
                </button>
            </div>
        `
    }, "")

    contenedor.innerHTML = generarNodos
}

cardHtml(stockProductos)

let carrito = []

// necesito llamar a todos los botones que van a generar la acción de añadir al carrito
// para poder hacerlo, utilizamos querySelectorAll , getElementByClassName

function aniadirAlCarrito (array) {
    const botonAniadir = document.querySelectorAll(".boton-card")    
    botonAniadir.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)
            const filtrarProducto = array.find((elemento) => {
                return elemento.id === Number(id)
            })
            carrito.push(filtrarProducto)   
            console.log(carrito)
            localStorage.setItem("carrito", JSON.stringify(carrito))   
        }
        
    })
}

aniadirAlCarrito(stockProductos)

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []