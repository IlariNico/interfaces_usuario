let cards = document.querySelectorAll(".seccion_amigos .item")
window.addEventListener("scroll",mostrarCards)

function mostrarCards(){
    if(window.scrollY >= 1045){
        let i = 0;
        cards.forEach(c => {
            setTimeout( ()=>{
                c.classList.add("aparecerCard")
            },500*i)
            i++;
        });
    }else{
        cards.forEach(c => {
                c.classList.remove("aparecerCard")
        });
    }
}