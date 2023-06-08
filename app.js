const openMenu = document.querySelector('.open');
const closeMenu =document.querySelector('.close');
const navbar = document.querySelector('nav ul');

openMenu.addEventListener('click',()=>{
    navbar.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    navbar.classList.remove('active');
})
