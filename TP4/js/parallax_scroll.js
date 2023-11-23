"use strict";
let s_rojo = document.querySelector(".spiderman.rojo");
let s_negro = document.querySelector(".spiderman.negro");
let s_violeta = document.querySelector(".spiderman.violeta");

let t_negro = document.querySelector(".telaaraña.negra")
let t_rojo = document.querySelector(".telaaraña.roja")

let cielo = document.querySelector(".seccion_edificios .cielo")

let e_izq = document.querySelector(".edificio.izquierda")
let e_med = document.querySelector(".edificio.medio")
let e_der = document.querySelector(".edificio.derecha")

window.addEventListener("scroll",moverElementos);

let ultimaPosicion = 0;
function moverElementos(){
    let scrollY = window.scrollY;

    let velocidad = cielo.getAttribute("data-velocidad");
    let newPosY = - scrollY * velocidad / 80 ;
    let newPosX = - scrollY * velocidad / 80  ;
    cielo.style.transform = 'translateY('+newPosY+'px)'
    

    velocidad = s_negro.getAttribute("data-velocidad");
    newPosX = scrollY * velocidad / 80 ;
    s_negro.style.transform = 'translateX('+newPosX+'px)'
    t_negro.style.transform = 'translateX('+newPosX+'px)'

    velocidad = s_violeta.getAttribute("data-velocidad");
    newPosY = -scrollY * velocidad / 80 ;
    newPosX = - scrollY * velocidad / 80  ;
    s_violeta.style.transform = 'translate('+newPosX+'px,'+newPosY+'px)'

    velocidad = s_rojo.getAttribute("data-velocidad");
    newPosY = scrollY * velocidad / 800 ;
    newPosX = - scrollY * velocidad / 80  ;
    s_rojo.style.transform = 'translate('+newPosX+'px,'+newPosY+'px)'
    t_rojo.style.transform = 'translate('+newPosX+'px,'+newPosY+'px)'

    velocidad = e_izq.getAttribute("data-velocidad");
    newPosY = scrollY * velocidad / 30 ;
    newPosX = - scrollY * velocidad / 90  ;
    e_izq.style.transform = 'translate('+newPosX+'px,'+newPosY+'px)'
    
    velocidad = e_der.getAttribute("data-velocidad");
    newPosY = scrollY * velocidad / 30 ;
    newPosX = scrollY * velocidad / 90  ;
    e_der.style.transform = 'translate('+newPosX+'px,'+newPosY+'px)'

    ultimaPosicion = scrollY;
}