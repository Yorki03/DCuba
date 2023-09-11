export class NumerosSalidos{
    id_numeros_salidos: number;
    estado: string;
    centena: number;
    id_numero: number;
    numero1_corrido: number;
    numero2_corrido: number;

    constructor(data:any){
        this.id_numeros_salidos = data.id_numeros_salidos;
        this.estado = data.estado;
        this.centena = data.centena;
        this.id_numero = data.id_numero;
        this.numero1_corrido = data.numero1_corrido;
        this.numero2_corrido = data.numero2_corrido;
    }

    get Centena(){return this.centena;}
    get idNumero(){return this.id_numero}
    get numeroCorrido1(){return this.numero1_corrido}
    get numeroCorrido2(){return this.numero2_corrido}

}