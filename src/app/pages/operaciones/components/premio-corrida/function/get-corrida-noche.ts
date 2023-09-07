import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionJugadaCorridaNoche{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.grtPremiosCorridoNoche1().subscribe({
            next:(corrida)=>{
                variables.premiosJugadasCorridaNoches1 = corrida;
            }, error:(err)=>{
                console.log(err);
            }
        });
        service.grtPremiosCorridoNoche2().subscribe({
            next:(corrida)=>{
                variables.premiosJugadasCorridaNoches2 = corrida;
            }, error:(err)=>{
                console.log(err);
            }
        });
    }
}