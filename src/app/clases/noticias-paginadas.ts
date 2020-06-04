import { Noticia } from './noticia';

export class NoticiasPaginadas {
    list: Noticia[];
    size: number;

    constructor(list:Noticia[], size:number){
        this.list = list;
        this.size = size;
    }

}
