export class Centenas{
    id_centenas: number;
    dinero: number;
    centena: number;
    estado: string;
    telefono: string;
    id_numero: number;

    constructor(data: any){
        this.id_centenas = data.id_centenas;
        this.dinero = data.dinero;
        this.centena = data.centena;
        this.estado = data.estado;
        this.telefono = data.telefono;
        this.id_numero = data.id_numero;
    }

    get Dinero(){ return this.dinero }
    get Centena(){ return this.centena }
    get Estado(){ return this.estado }
    get Telefono(){ return this.telefono}
    get idNumero(){ return this.id_numero}
}