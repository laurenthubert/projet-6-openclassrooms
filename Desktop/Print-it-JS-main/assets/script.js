
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


const autreimage = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png" ]
let imageactive = 0

///////////////evenement
document.getElementById('precedent').addEventListener('click', function() 
{
	 imageactive = imageactive -1
	if (imageactive < 0)
	imageactive =3
document.getElementById('listeimage').src = "./assets/images/slideshow/" + autreimage[imageactive]
////////////////////////////////////////////////////////////////////////////////////



})






document.getElementById("suivant").addEventListener("click", function() 
{
	imageactive = imageactive + 1
	if (imageactive > 3)
	imageactive = 0
document.getElementById('listeimage').src = "./assets/images/slideshow/" + autreimage[imageactive]
})

///////////////image  
//imageactive = imageactive -1
//if (imageactive < 0)
//imageactive =3
//document.getElementById('listeimage').src = "./assets/images/slideshow/" + autreimage[imageactive]
//
//imageactive = imageactive + 1
//if (imageactive > 3)
//imageactive = 0
//document.getElementById('listeimage').src = "./assets/images/slideshow/" + autreimage[imageactive]
///////////////bullet

///////////////texte