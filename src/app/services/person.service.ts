import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPerson } from "../interfaces/person.interface";
import { Observable, take } from "rxjs";
import { API_ENDPOINTS } from "../api-utils/api.endpoints";
import { API_TOKEN } from "../api-utils/api.token";


@Injectable({
    providedIn: 'root'
})
export class PersonService {
  
    getAllPersonUrl = `${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.getAllPersons}`;
    appPersonUrl = `${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.addPeron}`;
    getPersonByIdUrl =`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.getPersonByShortId}`;
    updatePersonUrl =`${API_ENDPOINTS.apiUrl}${API_ENDPOINTS.updatePerson}`;
    
    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      });

      
    constructor(private http: HttpClient){}

    getAllPerson() : Observable<IPerson[]>{
        return this.http.get<IPerson[]>(this.getAllPersonUrl);
    }

    addPerson(person: IPerson) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
        })
        return this.http.post(this.appPersonUrl, person, {headers});
    }

    update(person: IPerson): Observable<IPerson> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
        })
    
        return this.http.put<IPerson>(`${this.updatePersonUrl}`, person, { headers }).pipe(take(1));
      }
    getByShortId(shortId: string) : Observable<IPerson>{
        console.log(`${this.getPersonByIdUrl}${shortId}`); 
        return this.http.get<IPerson>(`${this.getPersonByIdUrl}${shortId}`).pipe(take(1));
    }

}