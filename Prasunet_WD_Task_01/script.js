// parallax effect on the button when scrolling

let btn=document.getElementById('btn');

window.addEventListener('scroll',()=>{
let value=window.scrollY;
btn.style.marginBottom=value*7+'px';
})