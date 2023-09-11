import { LimitadosService } from "src/app/shared/service/limitados.service";
import { Variables } from "../../../utils/variables";

export module FunctionLimitadosNoche{
    export function getAll(
        service: LimitadosService,
        variables: Variables
    ){
        service.getLimitadosNoche().subscribe({
            next:(noche)=>{
                variables.limitadosNoches = noche
            }, error:(error)=>{
                console.log(error);      
            }
        })
    }
}