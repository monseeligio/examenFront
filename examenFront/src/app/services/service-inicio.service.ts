import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceInicioService {

  constructor(private _http:HttpClient ) { }
  
  SolicitudDatos(){
    return this._http.get('https://randomuser.me/api/?results=10');
  }

}
