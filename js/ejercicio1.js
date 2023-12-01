import Galeria from "./galeria.js";

window.addEventListener("click", init);

var galeria = new Galeria();
function init(){
    var contenedorImagen = document.getElementById("imagen");
    var imagenAleatoria = galeria.establecerPoscionAleatoria();
    contenedorImagen.style.backgroundImage = ""
}