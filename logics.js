//code for moving directly to the second secotion of the page

let id = document.querySelector(".section-1");
let logoImg = document.querySelector(".logo-img");
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function() {
        id.scrollIntoView({ behavior: "smooth" });
       
    }, 2000);

     logoImg.style.display = "none";
})

//code for responsive menu bar
let crossPop = document.querySelector(".cross-popup");
let showing = true;
let responsiveImg = document.querySelector(".resImg");
let responsiveIcons = document.querySelector(".responsive-nav");
responsiveImg.addEventListener('click',function(event){
     
    if (showing) {
        responsiveIcons.style.left = "0%";
    } else {
        responsiveIcons.style.left = "-100%";
    }
    showing = !showing;
    
})

crossPop.addEventListener('click',function(){
    responsiveIcons.style.left = "-100%";
})


