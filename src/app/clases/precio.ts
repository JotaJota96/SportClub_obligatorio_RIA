import {Categoria} from 'src/app/clases/categoria';

export class Precio{
    
	public id_Precio: number;
	public valor: number;
	public fechaVigencia: string;
	public categoria: Categoria;
 
	constructor(id_Precio:number, valor:number, fechaVigencia:string, categoria:Categoria){
        
		this.id_Precio=id_Precio;
		this.valor=valor;
		this.fechaVigencia=fechaVigencia;
		this.categoria=categoria; 
	}
}