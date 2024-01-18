let nav = document.querySelector('.links-contenedor');
document.querySelector('.boton-menu').addEventListener('click',
function () {
    nav.classList.toggle('active');
});

AOS.init({
    offset:1
});

