let btn = document.querySelector('.btn_menu');
let sideBar = document.querySelector('.menu_lateral');
let container = document.querySelectorAll('.contenedor_personaje');
let timeoutIds = []; 

btn.addEventListener('click', () => {
    container.forEach(element => {
        element.classList.remove('open')
    });
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];
    btn.classList.toggle('open');
    sideBar.classList.toggle('open');

    container.forEach((cont, index) => {
        const timeoutId = setTimeout(() => {
            cont.classList.toggle('open');
        }, (4000 - (2000 * index)));
        timeoutIds.push(timeoutId); 
    });
});
container.forEach(element => {
    element.classList.remove('open')
});