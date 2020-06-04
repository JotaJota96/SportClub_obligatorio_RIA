import { Persona } from './persona';
import { Convenio } from './convenio';
import { Categoria } from './categoria';
import { MedioDePago } from './medio-de-pago';
import { ContratoDTO } from './contrato-dto';

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

    getDTO() : ContratoDTO {
        return new ContratoDTO(this.id, this.usuarioGenero, this.fechaComienzo, this.socio.id, this.convenio.id, this.categoria.id, this.medioDePago.id, this.activo);
    }

}
