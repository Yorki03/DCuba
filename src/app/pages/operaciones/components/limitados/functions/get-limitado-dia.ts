import { LimitadosService } from "src/app/shared/service/limitados.service";
import { Variables } from "../../../utils/variables";

export module FunctionLimitadosDia{
    export function getAll(
        service: LimitadosService,
        variables: Variables
    ){
        service.getLimitadosDia().subscribe({
            next:(dia)=>{
                variables.limitadosDias = dia;
            }, error:(error)=>{
                console.log(error);      
            }
        })
    }
}