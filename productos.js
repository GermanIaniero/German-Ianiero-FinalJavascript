fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa")
.then( res => res.json())
.then( data => console.log(data))
.catch(() => console.log("error"))


// fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript", {
//     method: "POST",
//     body: JSON.stringify({
//         apellido: "Bolaños",
//         estudiante: true,
//         nombre: "José Fernando"
//     }),
//     headers: {
//         "Content-Type":"application/json"
//     }
// })
// .then( res => res.json())
// .then( data => console.log(data))


const formProductos = document.querySelector("#form-productos")
const inputProducto = document.querySelector("#input-producto")
const inputPrecio = document.querySelector("#input-precio")
const inputImg = document.querySelector("#input-img")
const inputDescrip = document.querySelector("#input-descrip")
const inputCategoria = document.querySelector("#input-categoria")
const inputCantidad = document.querySelector("#input-cantidad")
const inputOferta = document.querySelector("#input-oferta")
const inputDescuento = document.querySelector("#input-descuento")

formProductos.onsubmit = (e) => {
    e.preventDefault()

    fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa", {
    method: "POST",
    body: JSON.stringify({
        Img: inputImg.value,
        Precio: inputPrecio.value,
        Producto: inputProducto.value,
        Descrip: inputDescrip.value,
        Categoria: inputCategoria.value,
        Cantidad: inputCantidad.value,
        Oferta: inputOferta.value,
        Descuento: inputDescuento.value
    }),
    headers: {
        "Content-Type":"application/json"
    }
    })
    .then( res => res.json())
    .then( data => console.log(data))
}


function modificarProducto (id, Img, Precio, Producto, Descrip,Categoria, Cantidad, Oferta, Descuento) {

    fetch( `https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            Img: Img,
            Precio: Precio,
            Producto: Producto,
            Descrip: Descrip,
            Categoria: Categoria,
            Cantidad: Cantidad,
            Oferta: Oferta,
            Descuento: Descuento
        }),
        headers: {
            "Content-Type":"application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => {
        console.log("No se encontro registro para modificar, vuelva a intentarlo")
    })
}

modificarProducto("www", "40", "089","Jarro Termico 7", "Bazar", "12", "2000", "50")



function borrarProducto (id, Img, Precio, Producto, Descrip,Categoria, Cantidad, Oferta, Descuento) {


fetch("mockapi.json")
.then( res => res.json())
.then( data => console.log(data))

// EL FETCH TIENE UNA VERSIÓN DE SUGAR SYNTAX 
// ASYNC AWAIT
// es una versión simplificada de fetch

const cards = (array) => {
    const nodos = array.reduce(( acc, element) => {
        return acc + `
        <div class="card" id="producto-${element.id}">
            <div class="container-img">
                <img src=${element.img} alt=${element.descrip}>
            </div>
            <h2>
                ${element.descrip}
            </h2>
            <h3>
                ${element.status}
            </h3>
        </div>
        `
    },"")
    document.querySelector(".contenedor").innerHTML = nodos
}

const personajes = async () => {
    const respuesta = await fetch("https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa")
    const data = await respuesta.json()
    cards(data.results)  
    const cardsPersonajes = document.querySelectorAll(".card")
        cardsPersonajes.forEach( elemento => {
            elemento.onclick = () => {
                const id = elemento.id.slice(10)
                const filtrarPersonaje = data.results.filter( elemento => {
                    return elemento.id === Number(id)
                } )
                console.log(filtrarPersonaje)
            }
        })  
}

personajes()

let paginaSiguiente = 40

document.querySelector("#next").onclick = () => {    
    if( paginaSiguiente != 42){
        paginaSiguiente ++
        document.querySelector("#next")
    }
    console.log(paginaSiguiente)
    fetch(`https://63c27ec1b0c286fbe5ee8771.mockapi.io/FinalJavaScript/ShopIsa?page=${paginaSiguiente}`)
    .then( res => res.json())
    .then( data => { 
        cards(data.results)                      
    })
}


}