////////////////////liste des constantes
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const bullets = document.querySelectorAll('.dot')
const texteamodifier = banner.querySelector('p')
const imagesvisible = document.getElementById('placeimagevisible')

////////////////////place du premier bullet visible de bullets
let bulletactif = 0 
function bulletselectionne() {
	bullets.forEach((dot, bulletselectionne) => {
		dot.classList.remove('dot_selected')
		if (bulletselectionne === bulletactif) {
			dot.classList.add('dot_selected')
		}
	})
}

////////////////////deplacement des bullets ,des images et changement de texte


function precedente() {
	bulletactif = (bulletactif - 1 + slides.length) % slides.length
	imagesvisible.src = './assets/images/slideshow/' + slides[bulletactif].image
	texteamodifier.innerHTML = slides[bulletactif].tagLine
	bulletselectionne()
}
function suivante() {
	bulletactif = (bulletactif + 1) % slides.length
	imagesvisible.src = './assets/images/slideshow/' + slides[bulletactif].image
	texteamodifier.innerHTML = slides[bulletactif].tagLine
	bulletselectionne()

}

/////////////////////declenchement des evenements

document.querySelector('.arrow_left').addEventListener('click', precedente)
document.querySelector('.arrow_right').addEventListener('click', suivante)
