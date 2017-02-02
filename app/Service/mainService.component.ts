import {Headers, Http} from "@angular/http";
import {Injectable, Input} from "@angular/core";
import 'rxjs/add/operator/toPromise';

import {Cigarette} from "../Model/cigarettes";


@Injectable()
export class MainServiceComponent {
    @Input() selectedCigarette: Cigarette;

    private cigaretteUrl = 'app/cigarettes';
    private haeders = new Headers({'Content-Type': 'application/json'});
    private handleError(error:any):Promise<any> {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    }

    constructor (private http: Http) {
    }

    getCigarettes():Promise<Cigarette[]> {
        return this.http.get(this.cigaretteUrl)
            .toPromise()
            .then(response => response.json().data as Cigarette[])
            .catch(this.handleError);
    }

}
