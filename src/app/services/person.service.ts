import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPerson } from "../interfaces/person.interface";
import { Observable } from "rxjs";
import { API_ENDPOINTS } from "../api-utils/api.endpoints";
import { IProduct } from "../interfaces/product.interface";

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    token = localStorage.getItem('authToken');
    getAllPersonUrl = `${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.getAllPersons}`;
    appPersonUrl = `${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.addPeron}`;

    constructor(private http: HttpClient){}
    getAllPerson() : Observable<IPerson[]>{
        return this.http.get<IPerson[]>(this.getAllPersonUrl);
    }

    addPerson(person: IPerson) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        })
        return this.http.post(this.appPersonUrl, person, {headers});
    }

}