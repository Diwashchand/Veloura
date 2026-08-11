const header=document.querySelector(".header"),menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>40));
if(menu)menu.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
const form=document.querySelector("#contactForm");
if(form)form.addEventListener("submit",e=>{e.preventDefault();document.querySelector(".message").textContent="Thanks! Your message has been received.";form.reset()});
