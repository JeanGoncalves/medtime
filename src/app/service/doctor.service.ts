import { Injectable }               from "@angular/core";
import { Http, Headers, Response }  from "@angular/http";

import { Observable }               from 'rxjs';
import { Doctor }                   from "../model/doctor.model";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DoctorService {

    private doctorUrl: string = 'app/doctor';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(
        private http: Http
    ) {}
    
    findAll(): Promise<Doctor[]> {
        return this.http.get(this.doctorUrl)
            .toPromise()
            .then(response => response.json().data as Doctor[])
            .catch(this.handleError);
    }

    find(id: number): Promise<Doctor> {
        return this.findAll()
            .then((doctor: Doctor[]) => doctor.find((doctor) => doctor.id === id));
    }

    create(doctor: Doctor): Promise<Doctor> {
        return this.http
            .post(this.doctorUrl, JSON.stringify(doctor), {headers: this.headers})
            .toPromise()
            .then((response: Response) => response.json() as Doctor)
            .catch(this.handleError);
    }

    update(doctor: Doctor): Promise<Doctor> {
        const url = `${this.doctorUrl}/${doctor.id}`;
        
        return this.http
            .put(url, JSON.stringify(doctor), {headers: this.headers})
            .toPromise()
            .then(() => doctor as Doctor)
            .catch(this.handleError);
    }

    delete(doctor: Doctor): Promise<Doctor> {
        const url = `${this.doctorUrl}/${doctor.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => doctor as Doctor)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}