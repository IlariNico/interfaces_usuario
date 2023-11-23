window.addEventListener("scroll",moverFotosGhost)

function moverFotosGhost(){

    let scrollY = window.scrollY;
    let cards = document.querySelectorAll(".captura_ghost");
    let velocidad;
    let newPosX;

    if(scrollY >= 1267 ){
        cards.forEach( e =>{
            velocidad = e.getAttribute("data-velocidad")
            newPosX = scrollY * velocidad/60 - 300
            e.style.left = newPosX + "px"
        })
    }else if(scrollY > 1300){
        cards[0].style.left = 0 + "px"
    }
}