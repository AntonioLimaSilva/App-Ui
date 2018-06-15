import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {

    static handle(erro: Response | any) {
       let errorMessage: string;

       if(erro instanceof Response) {
            errorMessage = `Error ${erro.url} ao acessar ${erro.statusText}`;
       } else {
            errorMessage = erro.toString();
       }

       console.log(errorMessage);
       return Observable.throw(errorMessage);
    }

}