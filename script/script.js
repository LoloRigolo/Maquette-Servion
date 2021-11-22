var header = document.querySelector(".header"); //On crée une variable navbar qui est directement relié a une classe html pareil pour Ham
var ham = document.querySelector(".ham");
var ul = document.querySelectorAll("ul");

function toggleHamburger() {
  //On crée une fonction pour le menu Burger
  header.classList.toggle("showNav");
  ham.classList.toggle("showClose");
  
}

ham.addEventListener("click", toggleHamburger); // On crée une fonction lors d'un click