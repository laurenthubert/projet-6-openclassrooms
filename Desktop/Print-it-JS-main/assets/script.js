////////////////////liste des constantes
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const bullets = banner.querySelectorAll(".dot");
const texteamodifier = document.querySelector("p");
const imagesvisible = document.getElementById("placeimagevisible");
////////////////////place du premier bullet
let bulletactif = 0;
////////////////////bullet visible
function bulletselectionne() {
  bullets.forEach((dot, bulletselectionne) => {
    dot.classList.remove("dot_selected");
    if (bulletselectionne === bulletactif) {
      dot.classList.add("dot_selected");
    }
  });
}
/////////////////////image visible
function imageselectionnee() {
  imagesvisible.src = "./assets/images/slideshow/" + slides[bulletactif].image;
}
////////////////////texte visible
function texteselectionne() {
  texteamodifier.innerHTML = slides[bulletactif].tagLine;
}
////////////////////regle du click , deplacement des bullets ,des images et du changement de texte
function precedente() {
  bulletactif = bulletactif - 1;
  if (bulletactif > 3) bulletactif = 0;
  if (bulletactif < 0) bulletactif = 3;
  bulletselectionne();
  imageselectionnee();
  texteselectionne();
}
function suivante() {
  bulletactif = bulletactif + 1;
  if (bulletactif > 3) bulletactif = 0;
  if (bulletactif < 0) bulletactif = 3;
  bulletselectionne();
  imageselectionnee();
  texteselectionne();
}
/////////////////////declenchement des evenements
document.querySelector(".arrow_left").addEventListener("click", precedente);
document.querySelector(".arrow_right").addEventListener("click", suivante);
////////////////////ajout personnel/////////////////////////////////////////////////////////
////////////////////declanchement automatique
setInterval("suivante(1)", 5000);
