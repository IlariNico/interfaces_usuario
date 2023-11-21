"use strict";
let s_rojo = document.querySelector(".spiderman.rojo");
let s_negro = document.querySelector(".spiderman.negro");
let s_violeta = document.querySelector(".spiderman.violeta");

let t_negro = document.querySelector(".telaaraña.negra")
let t_rojo = document.querySelector(".telaaraña.roja")

let cielo = document.querySelector(".cielo")

let e_izq = document.querySelector(".edificio.izquierda")
let e_med = document.querySelector(".edificio.medio")
let e_der = document.querySelector(".edificio.derecha")

window.addEventListener("scroll",moverElementos);

function moverElementos(){
    let porcentaje = window.scrollY * 100 /720 * 0.08
    if(window.scrollY < 150){
        let seccion_edificios = document.querySelector(".seccion_edificios");
        s_negro.style.opacity = porcentaje;
        t_negro.style.opacity = porcentaje;

        s_violeta.style.opacity = porcentaje;

        s_rojo.style.opacity = porcentaje;
        t_rojo.style.opacity = porcentaje;

        cielo.style.top = -150*porcentaje/3 +"px"
    }
    
}