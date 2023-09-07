import { DineroService } from "src/app/shared/service/dinero.service";
import { Variables } from "../utils/variables";

export module FunctionDinero{
    export function getAll(
        service: DineroService,
        variables: Variables
    ){
        service.getDinero().subscribe({
            next:(dinero)=>{
                variables.dineroTotal = dinero;
            }, error:(err)=>{
                console.log(err);                
            }
        })
    }
}