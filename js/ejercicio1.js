//importamos la clase galeria
import Galeria from "./galeria.js";
//y cuando se cargue la página se añade lo necesario
window.addEventListener("load", init);

//creamos una galeria con siete imágenes
//que son todas de las que disponemos
var galeria = new Galeria(7);
//pillamos el sitio donde van a ir las imágenes y lo metemos en una variable
var contenedorImagen = document.getElementById("imagen");
//y los botones por motivos de comodidad
var siguiente = document.getElementById("siguiente");
var anterior = document.getElementById("anterior");
var primera = document.getElementById("primera");
var ultima = document.getElementById("ultima");


//esta función hace todo lo que necesitemos al cargar la página
function init() {
    //pillamos una imagen aleatoria
    var imagenAleatoria = galeria.establecerImagenAleatoria();
    //y la ponemos en el fondo 
    //de esta manera
    contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenAleatoria + ".jpg)";
   
    //añadimos los eventos a los botones
    primera.addEventListener("click", irExtremos);
    siguiente.addEventListener("click", moverse);
    anterior.addEventListener("click", moverse);
    ultima.addEventListener("click", irExtremos);

    //y a la ventana añadimos el evento keydown

    //esto es para que al darle a la flecha izquierda y a la flecha derecha 
    //podamos movernos de imagen si quisieramos (forma parte del reto extra)

    //tardé un rato en darme cuenta de que era la ventanala que tenía que tener el evento y no los botones
    window.addEventListener("keydown", moverseKeys);

     //según en que imagen estemos habilitamos o deshabilitamos los botones necesarios
     //esto es por si acaso la imagen aleatoria es la primera o la última
     //así se deshabilitan los botones adecuados
    deshabilitarHabilitar();
}

//esta función sirve para moverse a la imagen siguiente o a la anterior
//dependiendo del id del evento que reciba el click
function moverse(evento) {
    //si es el botón de siguiente
    if (evento.target.id === siguiente.id) {
        //vamos a la siguiente imagen y la ponemos
        let imagenSiguiente = galeria.posicionSiguiente();
        contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenSiguiente + ".jpg)";
        //según en que imagen estemos habilitamos o deshabilitamos los botones necesarios
        deshabilitarHabilitar();
    }
    //si es el botón de anterior pues vamos a la imagen anterior
    else if (evento.target.id === anterior.id) {
        let imagenAnterior = galeria.posicionAnterior();
        contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenAnterior + ".jpg)";
        //según en que imagen estemos habilitamos o deshabilitamos los botones necesarios
        deshabilitarHabilitar();
    }
}

//esta función es parecida a la anterior
//pero con última y la primera imagen
function irExtremos(evento) {
    //si calcamos al botón de la última imagen la ponemos
    if (evento.target.id === ultima.id) {
        let imagenUltima = galeria.establecerUltimaPosicion();
        contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenUltima + ".jpg)";
        
        deshabilitarHabilitar();
    }
    //si es el botón de la primera pues ponemos la primera
    else if (evento.target.id === primera.id) {
        let imagenPrimera = galeria.establecerPrimeraPosicion();
        contenedorImagen.style.backgroundImage = "url(" + "/images/" + imagenPrimera + ".jpg)";
        //y vuelta a deshabilutar botones
        deshabilitarHabilitar();
    }
}

//esta función funciona como las anteriores pero con las flechas del teclado
function moverseKeys(evento) {

    //si es la flecha de la derecha hacemos lo mismo que si le dieramos al botón de siguiente
    if (evento.key === "ArrowRight") {
        let imagenSiguiente = galeria.posicionSiguiente();
        contenedorImagen.style.backgroundImage = "url" + "(" + "/images/" + imagenSiguiente + ".jpg" + ")";
        deshabilitarHabilitar();
    }
    //si es la de la izquierda hacemos lo mismo que si le dieramos al botón de anterior
    else if (evento.key === "ArrowLeft") {
        let imagenAnterior = galeria.posicionAnterior();
        contenedorImagen.style.backgroundImage = "url" + "(" + "/images/" + imagenAnterior + ".jpg" + ")";
        deshabilitarHabilitar();
    }
}


// y esta última función es para darle los estilos de deshabilitado y habilitado a los botones
function deshabilitarHabilitar() {
    //nos basamos según la imagen en la que estemos
    //y como ya teníamos la clase solo hace falta cambiarle el nombre
    switch (galeria.Indice) {
        //si estamos en la primera
        case (0):
            //botones de anterior y primera deshabilitados porque ya estamos en la primera
            //y porque no podemos ir más hacia atrás
            primera.classList.remove("habilitado");
            primera.classList.add("deshabilitado");
            anterior.classList.remove("habilitado");
            anterior.classList.add("deshabilitado");
            //botones de última y siguiente habilitados porque nos podemos mover hacia adelante
            ultima.classList.remove("deshabilitado");
            ultima.classList.add("habilitado");
            siguiente.classList.remove("deshabilitado");
            siguiente.classList.add("habilitado");

            
            //y el break para que pare
            break;
        //si estamos en la última imagen
        case (galeria.Imagenes.length - 1):
            //no podemos volver a la última ( ya estamos en ella) y no podemos seguir adelante

            ultima.classList.remove("habilitado");
            ultima.classList.add("deshabilitado");
            siguiente.classList.remove("habilitado");
            siguiente.classList.add("deshabilitado");

            //pero si que podemos ir a la primera e ir hacia atrás
            primera.classList.remove("deshabilitado");
            primera.classList.add("habilitado");
            anterior.classList.remove("deshabilitado");
            anterior.classList.add("habilitado");
            //break para no seguir
            break;
        //y si no es ninguno de los otros dos casos 
        default:
            //por defecto todo está habilitado
            ultima.classList.remove("deshabilitado");
            ultima.classList.add("habilitado");
            siguiente.classList.remove("deshabilitado");
            siguiente.classList.add("habilitado");
            primera.classList.remove("deshabilitado");
            primera.classList.add("habilitado");
            anterior.classList.remove("deshabilitado");
            anterior.classList.add("habilitado");
            break;

    }
}
