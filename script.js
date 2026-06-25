// ===============================
// Typing Animation
// ===============================

const words = [
    "Full Stack Developer",
    "CSE Student",
    "Java Programmer",
    "Python Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);
    }
    else{

        typing.textContent = current.substring(0,charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if(!deleting && charIndex === current.length+1){

        deleting = true;

        speed = 1200;

    }

    if(deleting && charIndex===0){

        deleting = false;

        wordIndex++;

        if(wordIndex===words.length){

            wordIndex=0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();


// ===============================
// Navbar Active Link
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ===============================
// Scroll Progress Bar
// ===============================

const progress=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

if(progress){

progress.style.width=progressHeight+"%";

}

});


// ===============================
// Reveal Animation
// ===============================

const reveals=document.querySelectorAll(

".skill-card,.project-card,.timeline-content,.experience-card,.certificate-card,.about-info div"

);

function reveal(){

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const visible=window.innerHeight-100;

if(top<visible){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// Mobile Menu
// ===============================

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

if(menu){

menu.onclick=()=>{

nav.classList.toggle("open");

};

}


// ===============================
// Back To Top
// ===============================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});


// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.background="rgba(10,10,10,.95)";

}else{

navbar.style.background="rgba(15,15,15,.60)";

}

});


// ===============================
// Contact Form
// ===============================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been received.");

form.reset();

});

}


// ===============================
// Image Hover Glow
// ===============================

const profile=document.querySelector(".profile-card");

if(profile){

profile.addEventListener("mousemove",()=>{

profile.style.boxShadow="0 0 40px #00e5ff";

});

profile.addEventListener("mouseleave",()=>{

profile.style.boxShadow="none";

});

}


// ===============================
// Button Hover Animation
// ===============================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});


// ===============================
// Console Message
// ===============================

console.log(
"%cWelcome to Fahi's Portfolio 🚀",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);