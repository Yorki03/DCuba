import { HistorialService } from "src/app/shared/service/historial.service";
import { Variables } from "../../../utils/variables";

export module FunctionJugadasNormales{
    export function getAll(
        service: HistorialService,
        variables: Variables
    ){
        service.jugadasNormales().subscribe({
            next:(historial) =>{
                variables.historialJugadasNormales = historial;
            }, error:(err)=>{
                console.log(err);                
            }
        })
    }
}