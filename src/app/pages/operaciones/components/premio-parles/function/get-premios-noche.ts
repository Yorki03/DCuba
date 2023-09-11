import { PremiosService } from "src/app/shared/service/premios.service";
import { Variables } from "../../../utils/variables";

export module FunctionPremiosParlesNoche{
    export function getAll(
        service: PremiosService,
        variables: Variables
    ){
        service.grtPremiosParlesNocheFijo1().subscribe({
            next:(premios)=>{
                variables.premiosJugadasParlesNocheFijo1 = premios;
            },error:(err)=>{
                console.log(err);                
            }
        });

        service.grtPremiosParlesNocheFijo2().subscribe({
            next:(premios)=>{
                variables.premiosJugadasParlesNocheFijo2 = premios;
            },error:(err)=>{
                console.log(err);                
            }
        });

        service.grtPremiosParlesNocheCorrido().subscribe({
            next:(premios)=>{
                variables.premiosJugadasParlesNocheCorrido = premios;
            },error:(err)=>{
                console.log(err);                
            }
        });
    }
}