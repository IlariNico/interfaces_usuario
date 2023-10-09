"use strict";
let btnCarrito = document.querySelector("#btnCarrito").addEventListener("click",desplegarMiCarrito);
let fondoOpacidad = document.querySelector("#fondoOpacidad");
let asideCarrito =  document.querySelector("aside.contenedor_carrito");
fondoOpacidad.addEventListener('click',ocultarfondoOpacidad);
function desplegarMiCarrito(){
   asideCarrito.classList.remove('oculto');
   fondoOpacidad.classList.remove('ocultar');
   fondoOpacidad.classList.add('mostrar')
}
function ocultarfondoOpacidad(){
    asideCarrito.classList.add('ocultoConAnimacion');
    fondoOpacidad.classList.add('ocultarConAnimacion');
    fondoOpacidad.classList.remove('mostrar')
    setTimeout( ()=>{
        asideCarrito.classList.remove('ocultoConAnimacion')
        asideCarrito.classList.add('oculto');
        fondoOpacidad.classList.remove('ocultarConAnimacion');
        fondoOpacidad.classList.add('ocultar')
    },200)
}

let items = document.querySelectorAll("aside.contenedor_carrito > div ul li");
items.forEach(element => {
    element.childNodes[5].addEventListener('mouseover',()=>{
        element.classList.add('hover');
    })
    element.childNodes[5].addEventListener('mouseout',()=>{
        element.classList.remove('hover');
    })
});