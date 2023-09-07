export class JugadaNormales{
    id_jugadas_normales: number;
    dinero_fijo: number;
    estado: string;
    telefono: string;
    id_numero: string;

    constructor(data:any){
        this.id_jugadas_normales = data.id_jugadas_normales;
        this.dinero_fijo = data.dinero_fijo;
        this.estado = data.estado;
        this.telefono = data.telefono;
        this.id_numero = data.id_numero;
    }

    get idJugada(){return this.id_jugadas_normales}
    get Dinero(){return this.dinero_fijo}
    get Estado(){return this.estado}
    get Telefono(){return this.telefono}
    get idNumero(){return this.id_numero}
}