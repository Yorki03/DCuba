export class Numeros{
    id_numero_salido_dia: number;
    estado: string;
    fecha: string;
    centena: number;
    numero1_corrido: number;
    numero2_corrido: number;

    constructor(data:any){
        this.id_numero_salido_dia = data.id_numero_salido_dia;
        this.estado = data.estado;
        this.fecha = data.fecha
        this.centena = data.centena;
        this.numero1_corrido = data.numero1_corrido;
        this.numero2_corrido = data.numero2_corrido;
    }

    get centenas(){
        return this.centena;
    }

    get corrido1(){
        return this.numero1_corrido;
    }

    get corrido2(){
        return this.numero2_corrido;
    }
}