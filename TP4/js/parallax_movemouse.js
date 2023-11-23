let contenedor = document.querySelector(".seccion_vengadores .parallax")
contenedor.addEventListener("mousemove",moverElementosVengadores)

let cielo2 = document.querySelector(".seccion_vengadores .parallax .cielo")
let pastos = document.querySelector(".seccion_vengadores .parallax .pastos")
let hulk = document.querySelector(".seccion_vengadores .parallax .hulk")
let msmarvel = document.querySelector(".seccion_vengadores .parallax .msmarvel")
let pantera = document.querySelector(".seccion_vengadores .parallax .pantera")
let arboles = document.querySelector(".seccion_vengadores .parallax .arboles")

let elementos = [cielo2,pastos,hulk,msmarvel,pantera,arboles]

function moverElementosVengadores(e){
    let centroX = window.innerWidth/2
    let centroY = window.innerHeight/2

    let posX = e.clientX;
    let posY = e.clientY;
    elementos.forEach( e =>{

        let movimiento = e.getAttribute("data-velocidad") *0.01;

        let newPosX = movimiento*(posX-centroX)
        let newPosY = movimiento*(posY-centroY)

        e.style.transform = "translate("+newPosX+"px,"+newPosY+"px)";
    })
}