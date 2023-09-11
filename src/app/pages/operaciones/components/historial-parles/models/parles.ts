export class Parles{
    id_parles: number;
    dinero: number;
    telefono: string;
    estado: string;
    id_numero1: number;
    id_numero2: number;

    constructor(data: any){
        this.id_parles = data.id_parles;
        this.dinero = data.dinero;
        this.telefono = data.telefono;
        this.estado = data.estado;
        this.id_numero1 = data.id_numero1;
        this.id_numero2 = data.id_numero2;
    }

    get Dinero(){ return this.dinero}
    get Telefono(){ return this.telefono}
    get Estado(){ return this.estado}
    get idNumero1(){ return this.id_numero1}
    get idNumero2(){ return this.id_numero2}
}