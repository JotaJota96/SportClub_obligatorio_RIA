export class AddEditContratoDTO {
    id_Contrato: number;
    usuarioGenero: string;
    fechaComienzo: string;
    id_Persona: number;
    id_Convenio: number;
    id_Categoria: number;
    id_MedioDePago: number;
    activo: boolean;

    constructor(id_Contrato: number, usuarioGenero: string, fechaComienzo: string,
                id_Persona: number, id_Convenio: number, id_Categoria: number,
                id_MedioDePago: number, activo: boolean){
        this.id_Contrato = id_Contrato;
        this.usuarioGenero = usuarioGenero;
        this.fechaComienzo = fechaComienzo;
        this.id_Persona = id_Persona;
        this.id_Convenio = id_Convenio;
        this.id_Categoria = id_Categoria;
        this.id_MedioDePago = id_MedioDePago;
        this.activo = activo;
    }
    
}
