import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './model/person';

@Injectable({
  providedIn: 'root'
})
export class AllServices {
  baseApi='http://localhost:4200';
  baseServiceApi=this.baseApi+'/api/';
  getPersonUrl='post/person';
  addPersonUrl='get/person';
  constructor(
    private _httpClient:HttpClient
  ) {
     
   }
   
   getPersonDetails(): Observable<Person[]> {
          return this._httpClient.get<Person[]>(this.baseServiceApi + this.getPersonUrl);
        }
    AddPerson(model:Person):Observable<any>{
      const body=JSON.stringify(model)
          return this._httpClient.post(this.baseServiceApi+this.addPersonUrl,body)
    }
}
