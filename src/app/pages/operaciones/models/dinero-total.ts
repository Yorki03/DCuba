export class DineroTotal{
    suma_total: number;

    constructor(data:any){
        this.suma_total = data.suma_total;
    }

    get Total(){return this.suma_total}
    get Limpio(){return this.suma_total - ((this.suma_total * 15)/100)}
}