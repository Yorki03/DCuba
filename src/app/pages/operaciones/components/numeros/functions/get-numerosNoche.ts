import { NumerosService } from "src/app/shared/service/numeros.service";
import { Variables } from "../../../utils/variables";

export module FunctionNumerosNoche{
    export function getAll(
        service: NumerosService,
        variables: Variables
    ){
        service.getNumerosNoche().subscribe({
            next:(noche)=>{
                variables.numerosNoches = noche;        
              },error:(error)=>{
                console.log(error);
              }
        })
    }
}

