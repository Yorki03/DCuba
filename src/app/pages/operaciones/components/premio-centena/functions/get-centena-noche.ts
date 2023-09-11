import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionPremioCentenaNoche{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.grtPremiosCentenaNoche().subscribe({
            next:(centena)=>{
                variables.premiosJugadasCentenaNoches = centena;
            }, error:(err)=>{
                console.log(err);                
            }
        })
    }
}