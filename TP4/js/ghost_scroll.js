window.addEventListener("scroll",moverFotosGhost)

function moverFotosGhost(){

    let scrollY = window.scrollY;
    let cards = document.querySelectorAll(".captura_ghost");
    let velocidad;
    let newPosX;

    if(scrollY >= 1267 && scrollY < 3500){
        cards.forEach( e =>{
            let extra = 0;
            velocidad = e.getAttribute("data-velocidad")
            if(velocidad == 6){
                extra = 50;
            }else if (velocidad == 3){
                extra = 100
            }
            newPosX = scrollY * velocidad/60 - 300 + extra
            e.style.left = newPosX + "px"
        })
    }else if(scrollY > 1300){
        cards[0].style.left = 0 + "px"
    }
}