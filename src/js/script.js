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
