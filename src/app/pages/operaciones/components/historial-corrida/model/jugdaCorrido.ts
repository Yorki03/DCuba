export class JugadaCorridas{
    id_jugadas_corridas: number;
    telefono: string;
    estado: string;
    dinero: number;
    id_numero: number;

    constructor(data:any){
        this.id_jugadas_corridas = data.id_jugadas_corridas;
        this.telefono = data.telefono;
        this.estado = data.estado;
        this.dinero = data.dinero;
        this.id_numero = data.id_numero;
    }
    get idJugada(){return this.id_jugadas_corridas}
    get Telefono(){return this.telefono}
    get Estado(){return this.estado}
    get Dinero(){return this.dinero}
    get idNumero(){return this.id_numero}
}