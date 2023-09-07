import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionPremiosNormalesNoche{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.getpremiosNormalesNoche().subscribe({
            next:(premio)=>{
                variables.premiosJugadasNormalesNoches = premio;
            },error:(err)=>{
                console.log(err);
            }
        });
    }
}