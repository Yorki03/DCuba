export class JugadaCentenas{
    id_cemtenas: number;
    dinero: number;
    centena: number;
    estado: string;
    telefono: string;
    id_numero: number;

    constructor(data:any){
        this.id_cemtenas = data.id_cemtenas;
        this.dinero = data.dinero;
        this.centena = data.centena;
        this.estado = data.estado;
        this.telefono = data.telefono;
        this.id_numero = data.id_numero
    }

    get idJugada(){ return this.id_cemtenas}
    get idNumero(){return this.id_numero}
    get Centena(){ return this.centena}
    get Estado(){return this.estado}
    get Telefono(){return this.telefono}
    get Dinero(){return this.dinero}
}