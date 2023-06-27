
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
const btn =document.getElementById('btn');

// dynamik website create ---------------
btn.addEventListener('click',()=>{
    document.querySelector('.fa-toggle-off').classList.toggle('fa-toggle-on')
    work.forEach(item =>{
    item.classList.toggle('fa-shake');
    });
    servicesBox.classList.toggle('fa-beat');
    document.querySelector('.logo').classList.toggle('fa-flip');
    document.querySelector('.day i').classList.toggle('fa-bounce');
    openMenu.classList.toggle('fa-spin');
    closeMenu.classList.toggle('fa-spin');
    document.querySelector('.about-col-1').classList.toggle('fa-flip');
    document.querySelectorAll('.sub-title').forEach(elem =>{
        elem.classList.toggle('fa-bounce');
    });
    document.querySelector('.fresher').classList.toggle('fa-flip');
    document.querySelector('#skills').classList.toggle('fa-shake');
    document.querySelector('.fa-github').classList.toggle('fa-spin');
    document.querySelector('.fa-envelope').classList.toggle('fa-spin');
    document.querySelector('.fa-phone').classList.toggle('fa-spin');
    document.querySelector('.fa-phone').classList.toggle('fa-spin-reverse');
    document.querySelector('.fa-facebook').classList.toggle('fa-spin');
    document.querySelector('.fa-instagram').classList.toggle('fa-flip');
    document.querySelector('.fa-linkedin').classList.toggle('fa-bounce');
    document.querySelector('.fa-twitter-square').classList.toggle('fa-spin');
    document.querySelector('.fa-twitter-square').classList.toggle('fa-spin-reverse');
    document.querySelector('.up').classList.toggle('fa-spin');
    document.querySelector('.texti').classList.toggle('fa-spin');
    document.querySelector('.fa-code').classList.toggle('fa-bounce');

});



// bg img change ------------------

// function firstImg(){
//     header.src = "images/bg1.jpg";
// };
// function secondImg(){
//     header.src = "images/bg2.jpg";
// };
// setInterval(secondImg,2000);
// setInterval(firstImg,5000);


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
    nav.classList.toggle('sticky',window.scrollY > 50);
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

// servicesBox.addEventListener('mouseenter',()=>{
//     let color = randomColor();
//     servicesBox.style.background = color;
// })
// servicesBox.addEventListener('mouseleave',()=>{
//     servicesBox.style.background = "rgb(56, 52, 52)";
// })

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

// dayNight --------------
function dayNight(){
    let dayIcon = document.querySelector('.fa-sun');
    dayIcon.classList.toggle('fa-moon');
    let body = document.querySelector('body');
    body.classList.toggle('active');
    document.getElementById('about').classList.toggle("active");
    document.querySelector('.services-list').classList.toggle('active');
    document.querySelector('.work-list').classList.toggle('active');
    document.querySelector('.contact-left').classList.toggle('active');
    document.getElementById('header').classList.toggle('active');
    navbar.classList.toggle('back');
    document.querySelector('.up').classList.toggle('back');
    document.getElementById('copyright').classList.toggle('active');
    document.querySelectorAll('form input').forEach(elem =>{
        elem.classList.toggle('active')
    });

    document.querySelector('form textarea').classList.toggle('active');
    document.querySelector('.open').classList.toggle('active');
    document.querySelector('.logo').classList.toggle('active');
    for(let navlink of navlinks){
        navlink.classList.toggle('back')
    };
    nav.classList.toggle('back');
    // header.classList.toggle('active');
    document.querySelector('#btn i').classList.toggle('active');

}

document.querySelectorAll('.btn').forEach(item =>{
    item.addEventListener('mouseenter',()=>{
        let color = randomColor();
        item.style.background = color;
    })
    item.addEventListener('mouseleave',()=>{
        item.style.background = "rgb(56, 52, 52)";
    })
});