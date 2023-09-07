import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionPremiosNormalesDia{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.getpremiosNormalesDia().subscribe({
            next:(premio)=>{
                variables.premiosJugadasNormalesDias = premio;
            },error:(err)=>{
                console.log(err);
            }
        });
    }
}