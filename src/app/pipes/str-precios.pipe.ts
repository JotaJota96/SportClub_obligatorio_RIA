import { Pipe, PipeTransform } from '@angular/core';
import { Precio } from '../clases/precio';

@Pipe({
  name: 'strPrecios'
})
export class StrPreciosPipe implements PipeTransform {

  transform(value: Precio[]): string {
    let strPrecios = "";

    if(value.length==0){
      strPrecios = "Sin Precios";
      return strPrecios;
    }

    value.forEach(element => {
      strPrecios += element.valor;
      strPrecios += ", ";
    });

    strPrecios = strPrecios.substring(0, strPrecios.length - 2);

    return strPrecios;
  }

}
