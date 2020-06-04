export class Convenio{
    
	public id: number;
	public nombre: string;
	public porcentajeDescuento: number;
	public activo: boolean;
 
	constructor(id:number, nombre:string, porcentajeDescuento:number, activo:boolean){
		this.id=id;
		this.nombre=nombre;
		this.porcentajeDescuento=porcentajeDescuento;
		this.activo=activo;
	}
}