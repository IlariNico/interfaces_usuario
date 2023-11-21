"use strict";
let duende = document.querySelector(".duende");

window.addEventListener("scroll",moverDuende);

function moverDuende(){
    
    let scrollY = window.scrollY;

    let velocidad = duende.getAttribute("data-velocidad");
    let newPosY = scrollY * velocidad / 25 ;
    duende.style.top = newPosY+"px"

}