import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionJugadaCorridaDia{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.grtPremiosCorridoDia1().subscribe({
            next:(corrida)=>{
                variables.premiosJugadasCorridaDias1 = corrida;
            }, error:(err)=>{
                console.log(err);
            }
        });
        service.grtPremiosCorridoDia2().subscribe({
            next:(corrida)=>{
                variables.premiosJugadasCorridaDias2 = corrida;
            }, error:(err)=>{
                console.log(err);
            }
        });
    }
}