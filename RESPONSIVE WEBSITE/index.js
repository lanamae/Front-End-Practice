const navlinks = document.querySelector('.navlinks');
const menuBar = document.querySelector('.menu-bar')
const close = document.querySelector('.close');


const showNav = () =>{
   navlinks.classList.add('show')
}

const hideNav = () =>{
    navlinks.classList.remove('show')
 }


menuBar.addEventListener('click', showNav)
close.addEventListener('click', hideNav)