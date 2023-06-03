
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

const images = document.querySelectorAll('#banner img')
let imageactive = 0
for (let i = 1; i < images.length; i += 1){
	images[i].classList.add('hidden')
}

document.getElementById("left").addEventListener("click", function() 
{
 alert("left");
});

document.getElementById("right").addEventListener("click", function() 
{
	  images[imageactive].classList.add('hidden')
	  imageactive += 1
	  images[imageactive].classList.remove('hidden')

});
