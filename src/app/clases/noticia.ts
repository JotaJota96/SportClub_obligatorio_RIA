export class Noticia {
    id:number;
    titulo: string;
    descripcion: string;
    imagen: string;
    fechaCaducidad: string;

    constructor(id:number, titulo: string, descripcion: string,
                imagen: string,fechaCaducidad: string){
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.fechaCaducidad = fechaCaducidad;
    }
}
