import { HistorialService } from "src/app/shared/service/historial.service";
import { Variables } from "../../../utils/variables";

export module FunctionJugadasParles{
    export function getAll(
        service: HistorialService,
        variables: Variables
    ){
        service.jugadasParleses().subscribe({
            next:(parle)=>{
                variables.historialJugadasParles = parle;
            }, error:(err)=>{
                console.log(err);                
            }
        })
    }
}