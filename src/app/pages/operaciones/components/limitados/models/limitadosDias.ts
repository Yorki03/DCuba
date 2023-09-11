export class LimitadosDias{
    id_limitado_dia: number;
    id_numero: number;

    constructor(data:any){
        this.id_limitado_dia = data.id_limitado_dia;
        this.id_numero = data.id_numero;
    }

    get limitadosDia(){return this.id_numero}
}