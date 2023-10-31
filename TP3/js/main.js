let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let widthCanvas = canvas.width;
let heightCanvas = canvas.height;

let nEnLinea = 4;
let cantFichasPorEquipo = ((nEnLinea + 2) * (nEnLinea + 3)) / 2;
let tamanioFicha = 30;
let xInicialTablero = 345;
let yInicialTablero = 195;
let imgViale = "../img/ficha_viale.png";
let imgSamid = "../img/ficha_samid.png";

let tablero = new Tablero(ctx, nEnLinea, tamanioFicha);
let turno = new Turno();

tablero.draw();
let contenedor_jugador1 = new ContenedorFichas(
  45,
  80,
  widthCanvas / 3,
  heightCanvas / 2,
  ctx,
  imgViale,
  cantFichasPorEquipo,
  1
);
let contenedor_jugador2 = new ContenedorFichas(
  widthCanvas - 270,
  80,
  widthCanvas / 3,
  heightCanvas / 2,
  ctx,
  imgSamid,
  cantFichasPorEquipo,
  2
);
contenedor_jugador1.draw();
contenedor_jugador2.draw();

let clickeando = false;
let fichaClickeada = null;

canvas.addEventListener("mousedown", (e) => {
  clickeando = true;
  if (fichaClickeada != null) {
    fichaClickeada = null;
  }
  if (turno.getTurno() == 1) {
    fichaClickeada = contenedor_jugador1.seleccionarFicha(e);
  } else {
    fichaClickeada = contenedor_jugador2.seleccionarFicha(e);
  }
});
canvas.addEventListener("mouseup", (e) => {
  clearCanvas();
  if (lugarCorrectoParaLanzar(e.offsetX, e.offsetY) && fichaClickeada) {
    //analizo y e x
    let columna = calcularColumna(e.offsetX);
    let exitoso = tablero.agregarFichaEn(columna, fichaClickeada);
    if (!exitoso) {
      if (turno.getTurno() == 1) {
        contenedor_jugador1.agregarFicha(fichaClickeada);
      } else {
        contenedor_jugador2.agregarFicha(fichaClickeada);
      }
    } else {
      if (turno.getTurno() == 1) {
        contenedor_jugador1.quitarFicha(fichaClickeada);
        turno.changeTurno(2);
      } else {
        contenedor_jugador2.quitarFicha(fichaClickeada);
        turno.changeTurno(1);
      }
    }
  } else if (fichaClickeada != null) {
    let posInicialX = fichaClickeada.getPositionInicial().x;
    let posInicialY = fichaClickeada.getPositionInicial().y;


    animarFichaRegreso(fichaClickeada,posInicialX,posInicialY,e.offsetX,e.offsetY)
 
  }
  fichaClickeada = null;
});

// hay problemas cuando el mouse sale del canvas

canvas.addEventListener("mousemove", (e) => {
  if (clickeando && fichaClickeada != null) {
    let img = fichaClickeada.getImage();
    fichaClickeada.setPosition(
      e.offsetX - img.width / 2.5,
      e.offsetY - img.height / 2.5
    );
    clearCanvas();
    mostrarCirculosGuia();
    fichaClickeada.draw();
  }
});

function lugarCorrectoParaLanzar(x, y) {
    let xValido =(x > xInicialTablero && x < (nEnLinea+3)*tamanioFicha*2+xInicialTablero)
  let yValido = (
    yInicialTablero - y - (1 / 2) * tamanioFicha <= tamanioFicha &&
    yInicialTablero > y
  );
  return xValido && yValido
}
function calcularColumna(x) {
  let colum = Math.floor((x - xInicialTablero) / (tamanioFicha * 2));
  return colum;
}
function clearCanvas() {
  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, widthCanvas, heightCanvas);
  tablero.draw();
  contenedor_jugador1.draw();
  contenedor_jugador2.draw();
}
function mostrarCirculosGuia() {
  for (let i = 0; i < nEnLinea + 3; i++) {
    ctx.beginPath();
    ctx.arc(
      xInicialTablero + 30 + (tamanioFicha + 30) * i,
      yInicialTablero - 25,
      tamanioFicha / 1.5,
      0,
      2 * Math.PI
    );
    ctx.stroke();
    ctx.closePath;
  }
}

function animarFichaRegreso(ficha, initialX, initialY,targetX,targetY) {
    // FUNCIONA, sin animacion
    /*ficha.setPosition(initialX,initialY);
    clearCanvas();*/

    const duration = 1000; // Duración de la animación en milisegundos
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < duration) {
            const progress = elapsedTime / duration;
            const newX = targetX + (initialX - targetX) * progress;
            const newY = targetY + (initialY - targetY) * progress;

            ficha.setPosition(newX, newY);
            clearCanvas();

            requestAnimationFrame(animate);
        } else {
            // La animación ha terminado, asegúrate de que la posición final sea exacta
            ficha.setPosition(initialX, initialY);
            clearCanvas();
        }
    }

    requestAnimationFrame(animate);

}
