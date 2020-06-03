import {Categoria} from 'src/app/clases/categoria';

export class Precio{
    
	public id: number;
	public valor: number;
	public fechaVigencia: string;
	public categoria: Categoria;
 
	constructor(id:number, valor:number, fechaVigencia:string, categoria:Categoria){
		this.id=id;
		this.valor=valor;
		this.fechaVigencia=fechaVigencia;
		this.categoria=categoria; 
	}
}