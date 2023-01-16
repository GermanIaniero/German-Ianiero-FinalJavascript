/*const aguante = document.querySelector("#toasty")

console.log(aguante)

aguante.onclick = () => {
  console.log("asldjsajd")
  Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}


*/
// swiperjs
// esta librería me permite incoporar un carrousel
// hay muchos tipos con diferentes funcionalidades
// debo incoporar el html necesario, css para darle estilo y la iniciaalización desde js

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// luxon
// librería que nos permite manipular fechas en js

// para poder instanciar una fecha, debo utilizar luxon.dateTime y guardarlo en una variable con el nombre DateTime

const DateTime = luxon.DateTime

console.log(DateTime)

// DateTime.local nos permite instanciar una fecha

const fechaArbitraria = DateTime.local(2020, 10, 20)

console.log(fechaArbitraria)

// toString(), toLocaleString()

console.log(fechaArbitraria.toString())

// toLocaleString() visualiza la fecha local

console.log(fechaArbitraria.toLocaleString())

// .now()
// nos muestra la hora actual

console.log(DateTime.now())

// podemos crear fechas a través de objetos
// fromObject recibe como argumento dos objetos, en donde aclaramos fecha y hora en el primero y zona horaria y tipo de numeración en el segundo

const fechaPorObjeto = DateTime.fromObject(
  {
    day: 16,
    hour: 10,
    month: 2
  },
  {
    zona: "America/Buenos_Aires",
    numberingSystem: 'beng' // si añaden esto, probablemente cambie la forma de ser visualizada la fecha
  }
  )

  console.log(fechaPorObjeto)

console.log(fechaPorObjeto.toLocaleString())

// norma ISO

console.log(DateTime.fromISO("1995-05-25").toString())

// podemos acceder a las fechas con el uso de los siguientes métodos

console.log(DateTime.now().year) // extraemos el año
console.log(DateTime.now().month) // mes
console.log(DateTime.now().day) // día
console.log(DateTime.now().second) // segundos
console.log(DateTime.now().weekday) // día de la semaba
console.log(DateTime.now().zoneName) // nombre de zona
console.log(DateTime.now().daysInMonth) // día en el mes

// lista de pre-sets con distintos formatos de fecha

const fechaActual = DateTime.now()


console.log(fechaActual.toLocaleString(DateTime.DATE_SHORT)) // fecha corta
console.log(fechaActual.toLocaleString(DateTime.DATE_MED)) // fecha abreviada
console.log(fechaActual.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)) // fecha y día abreviados
console.log(fechaActual.toLocaleString(DateTime.DATE_FULL)) // FECHA COMPLETA
console.log(fechaActual.toLocaleString(DateTime.DATE_HUGE)) // FECHA COMPLETA CON DÍA DE LA SEMANA
console.log(fechaActual.toLocaleString(DateTime.TIME_SIMPLE)) // HORA Y MINUTOS

// los objetos de luxon son inmutables
// retornan nuevas instancias alteradas de ellos, cuando se genera una operación sobre estos objetos

// para sumar utilizamos el método plus
// recibe como argumento la cantidad de tiempo que se quiera implementar

const suma = fechaActual.plus({month: 467, days: 100})
console.log(suma.toLocaleString(DateTime.DATE_SHORT))

// para restar utilizamos el método minus

const resta = fechaActual.minus({days: 10})
console.log(resta.toLocaleString(DateTime.DATE_HUGE))



/*ONCLICK */

function HacerClick() {
  swal({
    title: "¿Desea continuar con el pago?",
    text: "Verifique antes de pagar",
    icon: "info",
    button: "Entendido"
  }); 
}
          
