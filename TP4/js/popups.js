let pp = {
  img: "./images/popup_pp.png",
  nom: "Peter Parker",
  res: "también conocido como Spider-Man, es un personaje de ficción de Marvel Comics. Los poderes de Spider-Man son el resultado de una picadura de araña radiactiva que le otorgó habilidades especiales. Sus poderes incluyen:",
  poderes: [
    "Agilidad sobrehumana: Spider-Man tiene una agilidad extraordinaria que le permite moverse de manera rápida y ágil, saltar grandes distancias y realizar acrobacias asombrosas.",
    "Fuerza sobrehumana: Aunque no es tan fuerte como algunos de los superhéroes más poderosos de Marvel, Spider-Man tiene una fuerza considerable que le permite levantar objetos pesados y enfrentarse a enemigos formidables.",
    "Sentido arácnido: Spider-Man tiene un sentido arácnido que le permite detectar el peligro antes de que ocurra. Puede reaccionar instintivamente a las amenazas, lo que lo hace extremadamente difícil de sorprender.",
    "Trepar paredes: Spider-Man puede adherirse a las paredes y techos, lo que le permite moverse de manera vertical y colgarse boca abajo.",
    "Disparadores de telaraña: Peter Parker ha creado lanzadores de telarañas especiales que le permiten disparar y controlar telarañas. Utiliza estas telarañas para balancearse entre edificios, atrapar a los villanos y crear redes para inmovilizar a los oponentes.",
  ],
  fin: "Estos son los poderes principales de Spider-Man en los cómics y en varias adaptaciones cinematográficas y televisivas. Cabe destacar que a lo largo de la historia de los cómics, Spider-Man ha adquirido o perdido temporalmente otros poderes y habilidades debido a diferentes tramas y eventos.t",
};
let mm = {
  img: "./images/popup_mm.png",
  nom: "Miles Morales",
  res: "Sus poderes son en gran medida similares a los de Peter Parker, el Spider-Man original, pero Miles tiene algunas diferencias notables. Los poderes de Miles Morales incluyen:",
  poderes: [
    "Agilidad sobrehumana: Miles posee una agilidad extraordinaria que le permite moverse de manera rápida y realizar acrobacias impresionantes, al igual que Peter Parker.",
    "Sentido arácnido: Al igual que Peter Parker, Miles Morales tiene un sentido arácnido que le permite detectar el peligro antes de que ocurra. Esto le proporciona una ventaja en la lucha contra los criminales.",
    "Trepar paredes: Miles puede adherirse a las paredes y techos, lo que le permite moverse de manera vertical y colgarse boca abajo, al igual que otros Spider-Men.",
    "Camuflaje arácnido: Una de las características distintivas de Miles Morales es su habilidad de camuflaje arácnido. Puede volverse completamente invisible para el ojo humano durante un corto período de tiempo. Esta habilidad le proporciona una ventaja estratégica en situaciones de combate y sigilo.",
    'Descarga venenosa: En algunas versiones de los cómics y adaptaciones, Miles Morales también puede liberar una "descarga venenosa" que es una forma de energía bioeléctrica. Esta habilidad puede usarse en combate o para desactivar dispositivos electrónicos.',
  ],
  fin: "Estos son los poderes principales de Miles Morales en los cómics y en las adaptaciones cinematográficas y de videojuegos. El personaje de Miles Morales ha ganado popularidad y es conocido por su origen diverso y sus habilidades únicas en el universo de Spider-Man.",
};
let gs = {
    img: "./images/popup_gs.png",
    nom: "Gwen Stacy",
    res: "también conocida como Spider-Woman o Spider-Gwen, es un personaje de cómic de Marvel Comics que proviene de una realidad alternativa en el multiverso de Spider-Man. Sus poderes son en gran medida similares a los de otros Spider-Personajes, pero Gwen tiene algunas variaciones específicas. Los poderes de Spider-Gwen incluyen:",
    poderes: [
      "Agilidad sobrehumana: Gwen Stacy posee una agilidad extraordinaria que le permite moverse de manera rápida y realizar acrobacias impresionantes.",
      "Fuerza sobrehumana: Al igual que otros Spider-Personajes, Gwen tiene una fuerza considerable que le permite levantar objetos pesados y luchar contra enemigos formidables.",
      "Trepar paredes: Al igual que otros Spider-Personajes, Gwen Stacy puede adherirse a las paredes y techos, lo que le permite moverse de manera vertical y colgarse boca abajo.",
      'Disparadores de telaraña: Spider-Gwen utiliza lanzadores de telarañas para balancearse entre edificios, atrapar a los villanos y crear redes para inmovilizar a los oponentes.',
    ],
    fin: "En resumen, Spider-Gwen posee habilidades arácnidas similares a las de otros personajes de Spider-Man, pero su traje y su identidad están diseñados de manera diferente, y proviene de una realidad alternativa donde Gwen Stacy adquiere los poderes de Spider-Man en lugar de Peter Parker. El personaje ha ganado popularidad en los cómics y se ha convertido en un ícono por derecho propio.",
  };
let popup = document.querySelector(".popup");
let img = document.querySelector(".popup .contenedor > img");
let nombre = document.querySelector("#nombre");
let resumen = document.querySelector("#resumen");
let poderes = document.querySelector("#poderes");
let fin = document.querySelector("#fin");

document.querySelector(".popup .cruz").addEventListener("click", quitarPopUp);

document.querySelector(".menu_lateral .pp").addEventListener("click", () => {
  mostrarPopUp(pp);
});
document.querySelector(".menu_lateral .mm").addEventListener("click", () => {
    mostrarPopUp(mm);
  });
  document.querySelector(".menu_lateral .gs").addEventListener("click", () => {
    mostrarPopUp(gs);
  });
function mostrarPopUp(personaje) {
  popup.classList.add("mostrarse");
  img.setAttribute("src", personaje.img);
  nombre.innerHTML = personaje.nom;
  resumen.innerHTML = personaje.res;
  poderes.innerHTML = "";
  personaje.poderes.forEach((e, index) => {
    let i = index + 1;
    poderes.innerHTML += "<p class='p'>" + i + ". " + e + "</p>";
  });
  fin.innerHTML = personaje.fin;
  document.querySelector(".popup .contenedor").classList.add("aparecer");
  setTimeout(() => {
    popup.classList.add("fondoNegro");
  }, 1200);
}

function quitarPopUp() {
  popup.classList.add("desaparecer");
  popup.classList.remove("fondoNegro")
  setTimeout(() => {
    popup.classList.remove("mostrarse");
    popup.classList.remove("desaparecer");
  }, 1199);
}
