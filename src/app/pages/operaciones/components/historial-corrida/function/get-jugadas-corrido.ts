import { HistorialService } from "src/app/shared/service/historial.service";
import { Variables } from "../../../utils/variables";

export module FunctionJugadaCorrida{
    export function getAll(
        service: HistorialService,
        variables: Variables
    ){
        service.jugadasCorridas().subscribe({
            next:(corrido)=>{
                variables.historialJugadasCorrida = corrido;
            }, error:(err)=>{
                console.log(err);
                
            }
        })
    }
}