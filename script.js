window.addEventListener('scroll', function() {
    var introImg = document.getElementById('intro-img');
    var contenido = document.getElementById('contenido');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        introImg.style.opacity = 0;
        introImg.style.transform = 'scale(1)'; 
        introImg.style.pointerEvents = 'none';
        contenido.classList.add('mostrar');
    } else {
        introImg.style.opacity = 1;
        introImg.style.transform = 'scale(1.2)';
        introImg.style.pointerEvents = 'auto'; 
        contenido.classList.remove('mostrar');
    }
});

const ciudad = "Cali, Valle";

function obtenerFecha() {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date().toLocaleDateString('es-CO', opciones);
    return fecha.charAt(0).toUpperCase() + fecha.slice(1);
}

function mostrarCiudadYFecha() {
    const elemento = document.getElementById("info-fecha-ciudad");
    elemento.innerHTML = `${ciudad}, ${obtenerFecha()}`;
}

mostrarCiudadYFecha();

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}