import { Noticia } from './noticia';

export class NoticiaPagedListResponse {
    list: Noticia[];
    size: number;
    
    constructor(list: Noticia[], size: number){
        this.list = list;
        this.size = size;
    }
}
