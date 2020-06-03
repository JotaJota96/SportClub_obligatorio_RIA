import { Persona } from './persona';
import { Convenio } from './convenio';
import { Categoria } from './categoria';
import { MedioDePago } from './medio-de-pago';

export class Contrato {
    id:number;
    fechaHoraGenerado: string;
    usuarioGenero: string;
    fechaComienzo: string;
    socio: Persona;
    convenio: Convenio;
    categoria: Categoria;
    medioDePago: MedioDePago;
    activo: boolean;

    constructor(id:number, fechaHoraGenerado: string, usuarioGenero: string,
                fechaComienzo: string, socio: Persona, convenio: Convenio,
                categoria: Categoria, medioDePago: MedioDePago, activo: boolean){
        this.id = id;
        this.fechaHoraGenerado = fechaHoraGenerado;
        this.usuarioGenero = usuarioGenero;
        this.fechaComienzo = fechaComienzo;
        this.socio = socio;
        this.convenio = convenio;
        this.categoria = categoria;
        this.medioDePago = medioDePago;
        this.activo = activo;
    }

}
