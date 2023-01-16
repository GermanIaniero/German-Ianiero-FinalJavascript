const descuento =0.20

const mostrarOfertas = true
//console.log("the user require the sale product %s",mostrarOfertas)

function compare( a, b ) {
    if ( a.descrip < b.descrip ){
      return -1;
    }
    if ( a.descrip > b.descrip ){
      return 1;
    }
    return 0;
}

function cardsHtml ( array, contenedor, filtrarOferta ) {

    
    array.map( ( array ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.id = array.id
        card.innerHTML = `
            <div class="container-img">
                <img src=${array.img} alt=${array.descrip}>
            </div>
            <h2>
                ${array.descrip}
            </h2><br/>
            <h2>
                ${array.oferta?array.precio-(array.precio*(descuento%100)):array.precio}
            </h2>
            <button>Agregar al Carrito</button>
        `
        contenedor.appendChild(card)
    })    
}

// no va esto

const contenedor = document.querySelector(".container")
const listaProductos =stockProductos.slice().filter(stockProductos => stockProductos.oferta === mostrarOfertas);
listaProductos.sort(compare)

if(mostrarOfertas){
    document.getElementById('titulo').innerHTML="Mostrando Ofertas"
}else{
    document.getElementById('titulo').innerHTML="Mostrando Productos sin Ofertas"
}

cardsHtml(listaProductos,contenedor,mostrarOfertas)

/*function buscarProducto(){
    let productoBuscado = prompt("Ingrese el nombre del producto a buscar");
    const listaProductosConsulta =listaProductos.slice().filter(producto => producto.descrip.toLowerCase() === productoBuscado.toLowerCase());
    if (listaProductosConsulta.length>0){
        let resultado =""
        listaProductosConsulta.map( ( listaProductosConsulta ) => {
            precioTemp=listaProductosConsulta.oferta?listaProductosConsulta.precio-(listaProductosConsulta.precio*descuento):listaProductosConsulta.precio
            resultado +="nombre : "+listaProductosConsulta.descrip +",   ID: "+listaProductosConsulta.id+",   Precio:"+ precioTemp
        })
        alert("encontramos",resultado)
        
    }else{
        alert("No encontramos","No se econtraron productos con el nombre de "+ productoBuscado.toUpperCase())
    }

}

document.getElementById('buscar').addEventListener("click", buscarProducto); */
