let sp_violeta = document.querySelector(".seccion_seleccion .spiderman.violeta")
let sp_rojo = document.querySelector(".seccion_seleccion .spiderman.rojo")
let sp_negro = document.querySelector(".seccion_seleccion .spiderman.negro")

let fondoBlanco = document.querySelector("#fondoBlanco");
let fondoDeColor = document.querySelector("#fondoDeColor");


sp_violeta.addEventListener("mouseover",()=>{
    cambiarFondo("FondoRosa.png")
})
sp_rojo.addEventListener("mouseover",()=>{
    cambiarFondo("FondoAzul.png")
})
sp_negro.addEventListener("mouseover",()=>{
    cambiarFondo("FondoGris.png")
})

fondoDeColor.addEventListener("mouseout",()=>{
    sacarFondo()
})

function cambiarFondo(newFondo){
    fondoDeColor.classList.remove("fondoColores")
    fondoDeColor.setAttribute("src","./images/"+newFondo)
    fondoBlanco.classList.add("desaparecer")
    fondoDeColor.classList.add("fondoColores");

    if(newFondo=="FondoRosa.png"){

        sp_violeta.setAttribute("class","spiderman violeta seSeleccionoVioleta")
        sp_rojo.setAttribute("class","spiderman rojo blur violetaSeleccionado")
        sp_negro.setAttribute("class","spiderman negro blur violetaSeleccionado")

    }else if(newFondo == "FondoAzul.png"){
       
        sp_violeta.setAttribute("class","spiderman violeta blur rojoSeleccionado")
        sp_rojo.setAttribute("class","spiderman rojo seSeleccionoRojo")
        sp_negro.setAttribute("class","spiderman negro blur rojoSeleccionado")

    }else{
        sp_negro.classList.remove("blur")

        sp_negro.classList.add("seSeleccionoNegro")
        sp_rojo.classList.add("blur")
        sp_violeta.classList.add("blur")
        sp_rojo.classList.add("negroSeleccionado")
        sp_violeta.classList.add("negroSeleccionado")

        sp_violeta.setAttribute("class","spiderman violeta blur negroSeleccionado")
        sp_rojo.setAttribute("class","spiderman rojo blur negroSeleccionado")
        sp_negro.setAttribute("class","spiderman negro seSeleccionoNegro")
    }
}

function sacarFondo(){
    fondoDeColor.classList.remove("fondoColores")
    fondoBlanco.classList.remove("desaparecer")
    sp_violeta.setAttribute("class","spiderman violeta")
    sp_rojo.setAttribute("class","spiderman rojo ")
    sp_negro.setAttribute("class","spiderman negro ")
}