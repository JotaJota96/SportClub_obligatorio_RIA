import {Precio} from 'src/app/clases/precio';

export class Categoria {

    public id: number;
    public nombre: string;
    public activo: boolean;
    public precios: Precio[];

    constructor(id: number, nombre: string, activo: boolean, precios: Precio[]){
        this.id = id;
        this.nombre = nombre;
        this.activo = activo;
        this.precios = precios;
    }
}