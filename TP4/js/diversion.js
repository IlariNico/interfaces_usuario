let imagenes = document.querySelectorAll(".columna_imagen > img");
let items = document.querySelectorAll(".columna_texto .item")

window.addEventListener("scroll",mostrarItemsDiversion)
let ultimaPoscion = 0;
function mostrarItemsDiversion(){
    let scrollY = window.scrollY;
    if(scrollY < 4625){
        imagenes.forEach(e =>{
            e.style.opacity = 0;
        })
        imagenes[0].style.opacity =1;
        imagenes[0].classList.add("aparecerOpacidad");

        items.forEach(e =>{
            e.style.opacity = 0;
        })
        items[0].style.opacity =1;
        items[0].classList.add("aparecerOpacidad");

    }else if(scrollY >= 4625 && scrollY < 5027){

        imagenes.forEach(e =>{
            e.style.opacity = 0;
        })
        imagenes[1].style.opacity =1;
        imagenes[1].classList.add("aparecerOpacidad");

        items.forEach(e =>{
            e.style.opacity = 0;
        })
        items[1].style.opacity =1;
        items[1].classList.add("aparecerOpacidad");
    }else if(scrollY >= 5027 && scrollY < 5578){
        imagenes.forEach(e =>{
            e.style.opacity = 0;
        })
        imagenes[2].style.opacity =1;
        imagenes[2].classList.add("aparecerOpacidad");

        items.forEach(e =>{
            e.style.opacity = 0;
        })
        items[2].style.opacity =1;
        items[2].classList.add("aparecerOpacidad");
    }else{
        imagenes.forEach(e =>{
            e.style.opacity = 0;
        })
        imagenes[3].style.opacity =1;
        imagenes[3].classList.add("aparecerOpacidad");


        items.forEach(e =>{
            e.style.opacity = 0;
        })
        items[3].style.opacity =1;
        items[3].classList.add("aparecerOpacidad");
    }
}