const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__hamburger--toggle");
const times = document.querySelector(".hamburger__times");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
   navList.classList.toggle("active")
   times.classList.toggle("active")
})

document.querySelectorAll(".nav__list").forEach(n => 
    n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navList.classList.remove("active");
        times.classList.remove("active");
    }) )

times.addEventListener("click", () =>{
    times.classList.remove("active");
    hamburger.classList.toggle("active")
    navList.classList.remove("active");
})