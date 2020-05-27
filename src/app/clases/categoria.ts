import {Precio} from 'src/app/clases/precio';

export class Categoria {

    public id_Categoria: number;
    public nombre: string;
    public activo: boolean;
    public precios: Precio[];

    constructor(id_Categoria: number, nombre: string, activo: boolean, precios: Precio[]){

        this.id_Categoria = id_Categoria;
        this.nombre = nombre;
        this.activo = activo;
        this.precios = precios;
    }
}