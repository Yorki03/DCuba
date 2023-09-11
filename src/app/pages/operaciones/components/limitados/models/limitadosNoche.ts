export class LimitadosNoches{
    id_limitados_noche : number;
    id_numero: number;

    constructor(data:any){
        this.id_limitados_noche  = data.id_limitados_noche;
        this.id_numero = data.id_numero;
    }
    get limitadoNoche(){return this.id_numero}
}