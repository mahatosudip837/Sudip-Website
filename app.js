// alert("lets see sudip mahato portfolio");
const openMenu = document.querySelector('.open');
const closeMenu =document.querySelector('.close');
const navbar = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('#header nav a')

openMenu.addEventListener('click',()=>{
    navbar.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    navbar.classList.remove('active');
})

function validateForm(){
    alert("Your Massage Submited.")
}

window.onscroll = ()=>{
    sections.forEach(sec=> {
        if(window.scrollY >= sec.offsetTop - 150 && window.scrollY < sec.offsetTop - 150 + sec.offsetHeight){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('#header nav a[href*=' + sec.getAttribute('id') +']').classList.add('active');
            })
        }
    })
}


