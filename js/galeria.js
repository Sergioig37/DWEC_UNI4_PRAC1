export default class Galeria{

    constructor(){
        this._imagenes = ["foto1","foto2","foto3","foto4","foto5","foto6","foto7"];
        this._indice = parseInt(0);
    }

    get Imagenes(){
        return this_imagenes;
    }
    get Indice(){
        return this._indice;
    }
   
    set Indice(indice){
        this._indice = indice;
    }

    establecerPoscionAleatoria(){
        this._indice = Math.floor(Math.random()*this._imagenes.length);
        return this._imagenes[this._indice];
    }

    establecerUltimaPosicion(){
        this._indice = this._imagenes -1;
        return this._imagenes[this._indice];
    }

    establecerPrimeraPosicion(){
        this._indice = 0;
        return this._imagenes[0];
    }
    posicionAnterior(){
        let posicionActual = this._indice;
        let posicionAnterior = posicionActual - 1;
        this._indice = posicionAnterior;
        return this._imagenes[this._indice];
    }
    posicionSiguiente(){
        let posicionActual = this._indice;
        let posicionSiguiente = posicionActual + 1;
        this._indice = parseInt(posicionAnterior);
        return this._imagenes[this._indice];
    }

}