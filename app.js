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
const headerText = document.getElementById('header-text');
const nav = document.querySelector('nav');
const arryIcon =document.querySelector('.up-icon .up');
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
    nav.classList.toggle('sticky',window.scrollY > 100);
    navbar.classList.remove('active');
    arryIcon.classList.toggle('active',window.scrollY > 200);


}

// work box mouse event work -----------------

for (let works of work){
    works.addEventListener('mouseenter',()=>{
        let color = randomColor();
        works.style.background = color;
    })
    works.addEventListener('mouseleave',()=>{
        works.style.background = "rgb(56, 52, 52)";
    })
}

// service box mouse event js---------------
const colors = ['#00FF00', '#FFFF00', '#FF7F00', '#9400D3', '#4B0082','#0000FF'];

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

servicesBox.addEventListener('mouseenter',()=>{
    let color = randomColor();
    servicesBox.style.background = color;
})
servicesBox.addEventListener('mouseleave',()=>{
    servicesBox.style.background = "rgb(56, 52, 52)";
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

// headerText-------------
setTimeout(()=>{
    headerText.style.opacity = "1";
    headerText.style.transform ="translateY(0)"
},1000);