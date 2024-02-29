"use strict"

document.addEventListener('DOMContentLoaded', function() {
  const navToggler = document.querySelector(".nav-toggle-btn");
  const navbar = document.querySelector(".navbar__container");

  navToggler.addEventListener("click", function() {
      navbar.classList.toggle("active");
  });
});


let btn = document.getElementById('btn');
let spans = document.getElementsByTagName('span');

btn.onclick = function(){
  for(span of spans){
    span.classList.add('anim')
  }
  setTimeout(function(){
    for(span of spans){
      span.classList.remove('anim')
    }
  },500)
}





// break text button
const textButtons = document.querySelectorAll(`.contact__btn`);
textButtons.forEach(textButtons => {
    let text = textButtons.querySelector(`p`);
    

    text.innerHTML = text.innerText.split("").map(
        (char, i) => `<span style ="transform:rotate(${i * 12.8}deg)">${char }</span>`
    ).join("");
});




document.addEventListener("DOMContentLoaded", function() {
  const one = document.querySelector("#first"); // Selektor pro hlavní nadpis h1
  const oneP = document.querySelector("#first-p"); // Selektor pro odstavec s id="first-p"
  const second = document.querySelector("#second");
  const originalColor = getComputedStyle(one).color; // Získá původní barvu nadpisu jednou, při načtení stránky
  const originalColorP = getComputedStyle(oneP).color; // Získá původní barvu odstavce

  function checkOverlap() {
      const firstRect = one.getBoundingClientRect();
      const secondRect = second.getBoundingClientRect();

      // Kontrola překryvu
      const overlap = !(secondRect.right < firstRect.left || 
                        secondRect.left > firstRect.right || 
                        secondRect.bottom < firstRect.top || 
                        secondRect.top > firstRect.bottom);

      // Změna barvy nadpisu, pokud dojde k překryvu
      if (overlap) {
        one.style.color = "#f44566"; // Mění barvu na červenou
        oneP.style.color = "#f44566"
      } else {
        one.style.color = originalColor; // Vrátí původní barvu
        oneP.style.color = originalColorP;
      }
  }
  // Spustí funkci checkOverlap také při změně velikosti okna, pro případ změn v rozložení
  window.addEventListener("resize", checkOverlap);
});






document.addEventListener('DOMContentLoaded', function() {
  
    var swiper = new Swiper('.newSwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
          599: {
              slidesPerView: 2,
              spaceBetween: 40
          },
          1023: {
              slidesPerView: 3,
              spaceBetween: 60
          }
      }
    });
});