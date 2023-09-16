//on scroll function
function navmenu() {
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollup');

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add("navbar-sticky-moved-up");
        } else {
            navBar.classList.remove("navbar-sticky-moved-up");
        }

        //apply for transtion
        if (scroll >= 240) {
            navBar.classList.add("navbar-sticky-transitioned");
           // scrollTopButton.classList.add("scrollActive");
        } else {
            navBar.classList.remove("navbar-sticky-transitioned");
          // scrollTopButton.classList.remove("scrollActive");
        }
        //sticky on
        if(scroll >= 500){
            navBar.classList.add("navbar-sticky-on");
        }else{
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}
navmenu();
//side nav bar close on click
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function() {
    navCollapse.classList.remove("show");
  });
});

// text changer
var typed = new Typed('.textline', {
    strings: [ ' a Front-end Web Developer', ' a Tech Student', ' a Freelancer'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 700,
    loop: true
});

// Split text into words and characters
// import gsap from "gsap-trial";

const text = new SplitType('#target', { types: 'words, chars' })

// Animate characters into view with a stagger effect
gsap.from(text.chars, {
  opacity: 0,
  y: 10,
  duration: 1,
  ease: "back.out",
  stagger: { amount: 0.8 },
  scrollTrigger: {
    trigger: '.interrested-test',
    start: "top 80%",
  }
});

// let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
// tl.to("#target", {x: '0%', duration:0.7, stagger:0.2});