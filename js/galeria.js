export default class Galeria {

    constructor() {
        this._imagenes = ["foto1", "foto2", "foto3", "foto4", "foto5", "foto6", "foto7"];
        this._indice = parseInt(0);
    }

    get Imagenes() {
        return this._imagenes;
    }
    get Indice() {
        return this._indice;
    }

    set Indice(indice) {
        this._indice = indice;
    }

    establecerPoscionAleatoria() {
        this._indice = Math.floor(Math.random() * this._imagenes.length);
        return this._imagenes[this._indice];
    }

    establecerUltimaPosicion() {
        this._indice = this._imagenes.length - 1;
        return this._imagenes[this._indice];
    }

    establecerPrimeraPosicion() {
        this._indice = 0;
        return this._imagenes[0];
    }
    posicionAnterior() {
        if (this._indice !== 0) {
             let posicionActual = this._indice;
            let posicionAnterior = posicionActual - 1;
            this._indice = posicionAnterior;
        }
        return this._imagenes[this._indice];
    }
    posicionSiguiente() {
        if(this._indice!==this._imagenes.length-1){
            let posicionActual = this._indice;
            let posicionSiguiente = posicionActual + 1;
            this._indice = parseInt(posicionSiguiente);
        }
        return this._imagenes[this._indice];
    }

}