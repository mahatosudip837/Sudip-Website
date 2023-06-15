// alert("lets see sudip mahato portfolio");
const openMenu = document.querySelector('.open');
const closeMenu =document.querySelector('.close');
const navbar = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('#header nav a')
console.log(sections);
console.log(navlinks);

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
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('#header nav a[href*=' + id +']').classList.add('active');
            })
        }
    })
}


