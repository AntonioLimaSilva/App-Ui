import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandler {

    static handle(erro: Response | any) {
        let errorMessage: string;

        if(erro instanceof Response) {
            errorMessage = `Erro ${erro.status} ao acessar a url ${erro.url} - ${erro.statusText}`;
        } else {
            errorMessage = erro.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

}