import { HistorialService } from "src/app/shared/service/historial.service";
import { Variables } from "../../../utils/variables";

export module FunctionJugadasCentena{
    export function getAll(
        service: HistorialService,
        variables: Variables
    ){
        service.jugadasCentenas().subscribe({
            next:(centena)=>{
                variables.historialJugadasCentena = centena
            }, error:(err)=>{
                console.log(err);
                
            }
        })
    }
}