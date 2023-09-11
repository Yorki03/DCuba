export class Dinero{
    id_pagos: number;
    bruto: number; 
    limpio: number;
    juga_corri: number;
    parle_cente: number;
    lim:number = 0;

    constructor(data: any){
        this.id_pagos = data.id_pagos;
        this.bruto = data.bruto;
        this.limpio = data.limpio;
        this.juga_corri = data.juga_corri;
        this.parle_cente = data.parle_cente;
    }
    
    get Bruto(){return this.bruto}
    get Limpio(){return this.bruto - ((this.bruto * 15)/100)}
}