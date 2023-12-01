import Galeria from "./galeria.js";
window.addEventListener("load", init);

var galeria = new Galeria();

function init() {
    var contenedorImagen = document.getElementById("imagen");
    var imagenAleatoria = galeria.establecerPoscionAleatoria();
    contenedorImagen.style.backgroundImage = "url" + "(" + "/images/" + imagenAleatoria + ".jpg" + ")";
    document.getElementById("primera").addEventListener("click", irPrimera);
    document.getElementById("siguiente").addEventListener("click", irSiguiente);
    document.getElementById("anterior").addEventListener("click", irAnterior);
    document.getElementById("ultima").addEventListener("click", irUltima);
}

function irPrimera(evento) {

    if (galeria.Indice === 0) {
        
    }




}
