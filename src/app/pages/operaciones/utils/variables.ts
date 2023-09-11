import { JugadaCentenas } from "../components/historial-centena/model/jugadaCentena";
import { JugadaCorridas } from "../components/historial-corrida/model/jugdaCorrido";
import { JugadaParles } from "../components/historial-parles/model/jugadaParles";
import { JugadaNormales } from "../components/historial/model/jugadaNormales";
import { LimitadosDias } from "../components/limitados/models/limitadosDias";
import { LimitadosNoches } from "../components/limitados/models/limitadosNoche";
import { NumerosSalidos } from "../components/numeros/models/numerosSalidos";
import { Dinero } from "../models/dinero";
import { DineroTotal } from "../models/dinero-total";

export class Variables{
    numerosDias: NumerosSalidos[] = [];
    numerosNoches: NumerosSalidos[] = [];

    limitadosDias: LimitadosDias[] = [];
    limitadosNoches: LimitadosNoches[] = [];
    
    historialJugadasNormales: JugadaNormales[] = [];
    historialJugadasCentena: JugadaCentenas[] = [];
    historialJugadasCorrida: JugadaCorridas[] = [];
    historialJugadasParles: JugadaParles[] = [];
    
    premiosJugadasNormalesDias: JugadaNormales[] = [];
    premiosJugadasNormalesNoches: JugadaNormales[] = [];

    premiosJugadasCentenaDias: JugadaCentenas[] = [];
    premiosJugadasCentenaNoches: JugadaCentenas[] = [];

    premiosJugadasCorridaDias1: JugadaCorridas[] = [];
    premiosJugadasCorridaDias2: JugadaCorridas[] = [];
    premiosJugadasCorridaNoches1: JugadaCorridas[] = [];
    premiosJugadasCorridaNoches2: JugadaCorridas[] = [];
    
    premiosJugadasParlesDiasFijo1: JugadaParles[] =[];
    premiosJugadasParlesDiasFijo2: JugadaParles[] =[];
    premiosJugadasParlesDiasCorrido: JugadaParles[] =[];
    premiosJugadasParlesNocheFijo1: JugadaParles[] =[];
    premiosJugadasParlesNocheFijo2: JugadaParles[] =[];
    premiosJugadasParlesNocheCorrido: JugadaParles[] =[];

    
    dineroTotal: DineroTotal[] = [];
    

}