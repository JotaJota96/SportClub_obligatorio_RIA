import {PrestadorDeSalud} from 'src/app/clases/prestador-de-salud';

export class Persona {

    public id: number;
    public primerNombre: string;
    public segundoNombre: string;
    public primerApellido: string;
    public segundoApellido: string;
    public fechaNacimiento: string;
    public documento: string;
    public tipoDocumento: string;
    public telefono: string;
    public direccion: string;
    public fechaVenceCarneSalud: string;
    public prestadorDeSalud: PrestadorDeSalud;

    constructor(id: number, primerNombre: string, segundoNombre: string, 
                primerApellido: string, segundoApellido: string, fechaNacimiento: string, documento: string, 
                tipoDocumento: string, telefono: string, direccion: string,
                fechaVenceCarneSalud: string, prestadorDeSalud: PrestadorDeSalud) {
        this.id = id;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.fechaNacimiento = fechaNacimiento;
        this.documento = documento;
        this.tipoDocumento = tipoDocumento;
        this.telefono = telefono;
        this.direccion = direccion;
        this.fechaVenceCarneSalud = fechaVenceCarneSalud;
        this.prestadorDeSalud = prestadorDeSalud;
    }

}
