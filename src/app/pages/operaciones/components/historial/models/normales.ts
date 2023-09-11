export class Normales{
    id_jugadas_normales: number;
    dinero_fijo: number;
    dinero_corrido: number;
    estado: string;
    telefono: string;
    id_numero: number

    constructor(data: any){
        this.id_jugadas_normales = data.id_jugadas_normales;
        this.dinero_fijo = data.dinero_fijo;
        this.dinero_corrido = data.dinero_corrido;
        this.estado = data.estado;
        this.telefono = data.telefono;
        this.id_numero = data.id_numero
    }

    get dineroFijo(){ return this.dinero_fijo }
    get dineroCorrido(){ return this.dinero_corrido }
    get Estado(){ return this.estado }
    get Telefono(){ return this.telefono }
    get idNumero(){ return this.id_numero }
}