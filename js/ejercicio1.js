import Galeria from "./galeria.js";
window.addEventListener("load", init);

var galeria = new Galeria();
var contenedorImagen = document.getElementById("imagen");
var siguiente = document.getElementById("siguiente");
var anterior = document.getElementById("anterior");
var primera = document.getElementById("primera");
var ultima = document.getElementById("ultima");



function init() {
    var imagenAleatoria = galeria.establecerPoscionAleatoria();
    contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenAleatoria + ".jpg)";
    primera.addEventListener("click", irPrimera);
    siguiente.addEventListener("click", irSiguiente);
    anterior.addEventListener("click", irAnterior);
    ultima.addEventListener("click", irUltima);

    // siguiente.addEventListener("keydown", irSiguienteKey);
    // anterior.addEventListener("keydown", irAnteriorKey);


    ultima.classList.add("habilitado");
    siguiente.classList.add("habilitado");
    primera.classList.add("habilitado");
    anterior.classList.add("habilitado");
    deshabilitarHabilitar();
}

function irPrimera() {
    let imagenPrimera = galeria.establecerPrimeraPosicion();
    contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenPrimera + ".jpg)";
    deshabilitarHabilitar();
}

function irSiguiente() {
    let imagenSiguiente = galeria.posicionSiguiente();
    contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenSiguiente + ".jpg)";
    deshabilitarHabilitar();
}
function irAnterior() {
    let imagenAnterior = galeria.posicionAnterior();
    contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenAnterior + ".jpg)";
    deshabilitarHabilitar();
}
function irUltima() {
    let imagenUltima = galeria.establecerUltimaPosicion();
    contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenUltima + ".jpg)";
    deshabilitarHabilitar();
}


// function irSiguienteKey(evento) {
   
//     if (evento.key === "ArrowRight") {
//         evento.preventDefault();
//         let imagenSiguiente = galeria.posicionSiguiente();
//         contenedorImagen.style.backgroundImage = "url" + "(" + "/images/" + imagenSiguiente + ".jpg" + ")";
//         deshabilitarHabilitar();
//     }

// }
// function irAnteriorKey(evento) {
//     if (evento.key === "ArrowLeft") {
//         evento.preventDefault();
//         let imagenAnterior = galeria.posicionAnterior();
//         contenedorImagen.style.backgroundImage = "url" + "(" + "/images/" + imagenAnterior + ".jpg" + ")";
//         deshabilitarHabilitar();
//     }

// }



function deshabilitarHabilitar() {
    switch (galeria.Indice) {
        case (0):
            primera.className = "deshabilitado";
            anterior.className = "deshabilitado";
            ultima.className = "habilitado";
            siguiente.className = "habilitado";
            break;
        case (galeria.Imagenes.length - 1):
            ultima.className = "deshabilitado";
            siguiente.className = "deshabilitado";
            primera.className = "habilitado";
            anterior.className = "habilitado";
            break;
        default:
            ultima.className = "habilitado";
            siguiente.className = "habilitado";
            primera.className = "habilitado";
            anterior.className = "habilitado";

    }
}
