import { NumerosService } from "src/app/shared/service/numeros.service";
import { Variables } from "../../../utils/variables";

export module FunctionNumerosDia{
    export function getAll(
        service: NumerosService,
        variables: Variables
    ){
        service.getNumerosDia().subscribe({
            next:(dia)=>{
                variables.numerosDias = dia;        
            },error:(error)=>{
                console.log(error);
            }
        })
    }
}

