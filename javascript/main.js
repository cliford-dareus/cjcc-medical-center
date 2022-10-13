const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.header__menu__toggle');
const closeBtn = document.querySelector('.mobile__nav__close-toggle')

menuBtn.addEventListener('click', (e)=> {
    menu.classList.toggle('nav__open')
});

closeBtn.addEventListener('click', (e)=>{
    if(menu.classList.contains('nav__open')){
        menu.classList.remove('nav__open')
    }
});