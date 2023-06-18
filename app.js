// alert("lets see sudip mahato portfolio");
const openMenu = document.querySelector('.open');
const closeMenu =document.querySelector('.close');
const navbar = document.querySelector('nav ul');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('#header nav a');
const work = document.querySelectorAll('.work');
const servicesBox = document.querySelector('.services-box');
const watch = document.querySelector('#watch');
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

// navbar responsive ----------------------

openMenu.addEventListener('click',()=>{
    navbar.classList.add('active');
})
closeMenu.addEventListener('click',()=>{
    navbar.classList.remove('active');
})
// from validation alert massage show  --------------------

function validateForm(){
    alert("Your Massage Submited.")
}
// when scroll toggle active class ---------------

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

// work box mouse event work -----------------

for (let works of work){
    works.addEventListener('mouseenter',()=>{
        works.style.background = "green";
    })
    works.addEventListener('mouseleave',()=>{
        works.style.background = "rgb(255, 0, 43)";
    })
}

// service box mouse event js---------------

servicesBox.addEventListener('mouseenter',()=>{
    servicesBox.style.background = "green";
})
servicesBox.addEventListener('mouseleave',()=>{
    servicesBox.style.background = "rgb(253, 2, 44)";
})

// watch show -------------

setInterval(()=>{
    let time = new Date().toLocaleString();
    watch.innerHTML = time;
},1000)

// skill section -------------------

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
