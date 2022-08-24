const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

// abrir el menú de navegación
open.addEventListener('click', function () {
	nav.classList.add('right-0');
});

close.addEventListener('click', function () {
	nav.classList.remove('right-0');
});

//Inicio ABRIR lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxBody = document.querySelector('.lightbox-body');
const images = document.querySelectorAll('#gallery');
images.forEach(function (image) {
	// console.log(image);
	image.addEventListener('click', function () {
		lightbox.classList.add('scale-100');
		const img = document.createElement('img');
		img.src = image.src;
		// console.log(img)
		img.classList.add('w-full');
		img.classList.add('h-full');
		img.classList.add('object-cover');
		if (lightboxBody.children[0]) {
			lightboxBody.removeChild(lightboxBody.children[0]);
		}
		lightboxBody.appendChild(img);
		// console.log(lightboxBody)
	});
});
//FIN ABRIR lightbox
//INICIO  CERRAR lightbox
lightbox.addEventListener('click', function (e) {
	const idName = e.target.getAttribute('id')
	if (idName === 'lightbox') {
		lightbox.classList.remove('scale-100');
	}
});
//FIN  CERRAR lightbox

