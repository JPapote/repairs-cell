import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../interfaces/client';
import { FixedPhone } from '../interfaces/fixedPhone';
import { Phone } from '../interfaces/phone';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/'
  }

  getClients(): Observable<Client[]> {
   
    return this.http.get<Client[]>(`${this.myAppUrl}${this.myApiUrl}getClients`)
  }

  addClient(name:string): Observable<any>{
    console.log(name)
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}new/client`,
      {name:name}
    )
  }

  getReparation(): Observable<FixedPhone[]> {
   
    return this.http.get<FixedPhone[]>(`${this.myAppUrl}${this.myApiUrl}getClients/reparation`)
  }

  getPhoneClient(id:any): Observable<Phone[]> {
   
    return this.http.post<Phone[]>(`${this.myAppUrl}${this.myApiUrl}new/phoneClient`,{id})
  }

  newPhone(namePhone:string, clientId:number, number?:number): Observable<string> {
   
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}new/phone`,
    {
      namePhone,
      number,
      clientId
    })
  }

  addReparation(reparation:string, phoneId:number): Observable<string> {
   
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}new/reparation`,
    {
      reparation,
      phoneId,
      
    })
  }
}