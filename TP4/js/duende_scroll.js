"use strict";
let duende = document.querySelector(".duende");

window.addEventListener("scroll",moverDuende);

function moverDuende(){
    
    let scrollY = window.scrollY;

    if(scrollY < 792){
        let velocidad = duende.getAttribute("data-velocidad");
        let newPosY = scrollY * velocidad / 35 ;
        duende.style.top = newPosY+"px"
    }

}
