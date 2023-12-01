//tenemos la clase galería que vamos a exportar
//y es la que contendrá todas las imágenes
export default class Galeria {
    //el constructor recibe el número de imágenes con el que quieres trabajar,
    //por si quieres meter más imágenes
    constructor(numeroImagenes) {
        //creamos el array vacío de imágenes
        this._imagenes = [];
        //y según cuantas tengamos hacemos un bucle para meterlas
        for(let i=1;i<=numeroImagenes;i++){

            //todas las imágenes tienen el mismo nombre
            //y solo se diferencian en el número

            var foto = "foto"+i;

            //y se mete dentro del array de imágenes
            this._imagenes.push(foto);
        }
        //este es el índice/puntero que indica la posición en el array
        //empieza en cero por ningún motivo en especial
        //y por si acaso lo parseamos a entero para que no haya problemas
        this._indice = parseInt(0);
    }


    //getters y setters por si acaso
    get Imagenes() {
        return this._imagenes;
    }
    get Indice() {
        return this._indice;
    }

    set Indice(indice) {
        this._indice = indice;
    }

    //el nombre es bastante descriptivo,
    //genera una posición aleatoria y devuelve la imagen de esa posición
    establecerImagenAleatoria() {
        this._indice = Math.floor(Math.random() * this._imagenes.length);
        return this._imagenes[this._indice];
    }

    //este método devuelve la última foto del array
    establecerUltimaPosicion() {
        this._indice = this._imagenes.length - 1;
        return this._imagenes[this._indice];
    }
//este devuelve la primera imagen del array
    establecerPrimeraPosicion() {
        this._indice = 0;
        return this._imagenes[0];
    }

    //método para moverse a la imagen anterior
    posicionAnterior() {
        //solo está permitido si no estamos en la primera imagen de todas
        //si no fuera así seguramente daría un error por que se sale del array
        if (this._indice !== 0) {
             let posicionActual = this._indice;
             //la posición anterior simplemente se saca de restar la actual menos uno
            let posicionAnterior = posicionActual - 1;
            this._indice = posicionAnterior;
        }
        //devolvemos la imagen que sale
        return this._imagenes[this._indice];
    }

    //mismo método que el anterior pero para la siguiente imagen
    posicionSiguiente() {
        //excepto si ya estamos en la última que sino se sale del array
        if(this._indice!==this._imagenes.length-1){
            let posicionActual = this._indice;
            let posicionSiguiente = posicionActual + 1;
            this._indice = parseInt(posicionSiguiente);
        }
        //y se devuelve la imagen
        return this._imagenes[this._indice];
    }

}