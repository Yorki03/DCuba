import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionPremioCentenaDia{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.grtPremiosCentenaDia().subscribe({
            next:(centena)=>{
                variables.premiosJugadasCentenaDias = centena;
            },error:(err)=>{
                console.log(err);
            }
        })
    }
}