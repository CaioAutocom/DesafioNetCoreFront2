import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPerson } from "../interfaces/person.interface";
import { Observable } from "rxjs";
import { API_ENDPOINTS } from "../api-utils/api.endpoints";

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient){}
    getAllPerson() : Observable<IPerson[]>{
        return this.http.get<IPerson[]>(`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.getAllPersons}`);
    }

}