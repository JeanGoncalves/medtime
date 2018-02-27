import { Injectable }               from "@angular/core";
import { Http, Headers, Response }  from "@angular/http";

import { Observable }               from 'rxjs';
import { Specialty }                from "../model/specialty.model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpecialtyService {

    private specialtyUrl: string = 'app/specialty';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(
        private http: Http
    ) {}
    
    findAll(): Promise<Specialty[]> {
        return this.http.get(this.specialtyUrl)
            .toPromise()
            .then(response => response.json().data as Specialty[])
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}