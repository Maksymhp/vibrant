const menuBtn = document.querySelector ('.menu__btn');
const  menu = document.querySelector ('.navigation');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('navigation--active');
});