import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionPremiosParlesDia{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.grtPremiosParlesDiaFijo1().subscribe({
            next:(premio)=>{
                variables.premiosJugadasParlesDiasFijo1 = premio;
            }, error:(err)=>{
                console.log(err);                
            }
        });

        service.grtPremiosParlesDiaFijo2().subscribe({
            next:(premio)=>{
                variables.premiosJugadasParlesDiasFijo2 = premio;
            }, error:(err)=>{
                console.log(err);                
            }
        });

        service.grtPremiosParlesDiaCorrido().subscribe({
            next:(premio)=>{
                variables.premiosJugadasParlesDiasCorrido = premio;
            }, error:(err)=>{
                console.log(err);                
            }
        });
    }
}