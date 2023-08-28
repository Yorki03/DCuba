export class LimitadosNoches{
    id_limitados_noches: number;
    id_numero: number;

    constructor(data:any){
        this.id_limitados_noches = data.id_limitados_noches;
        this.id_numero = data.id_numero;
    }
}