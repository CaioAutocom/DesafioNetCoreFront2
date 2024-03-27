import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPerson } from "../interfaces/person.interface";
import { Observable, take } from "rxjs";
import { API_ENDPOINTS } from "../api-utils/api.endpoints";


@Injectable({
    providedIn: 'root'
})
export class PersonService {
    getAllPersonUrl = `${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.getAllPersons}`;
    appPersonUrl = `${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.addPeron}`;
    getPersonByIdUrl =`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.getPersonByShortId}`;
    updatePersonUrl =`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.updatePerson}`;
    deletePersonByIdUrl =`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.deletePerson}`;
    
    constructor(private http: HttpClient){}

    getAllPerson() : Observable<IPerson[]>{
        return this.http.get<IPerson[]>(this.getAllPersonUrl);
    }

    addPerson(person: IPerson) {
        return this.http.post(this.appPersonUrl, person);
    }

    update(person: IPerson): Observable<IPerson> {
        return this.http.put<IPerson>(`${this.updatePersonUrl}`, person).pipe(take(1));
      }
    getByShortId(shortId: string) : Observable<IPerson>{
        console.log(`${this.getPersonByIdUrl}${shortId}`); 
        return this.http.get<IPerson>(`${this.getPersonByIdUrl}${shortId}`).pipe(take(1));
    }

}