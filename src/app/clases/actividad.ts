export class Actividad {
    
	public id: number;
	public nombre: string;
	public activo: boolean;

	constructor(id:number, nombre:string, activo:boolean){
        
		this.id=id;
		this.nombre=nombre;
		this.activo=activo;
	}
}
