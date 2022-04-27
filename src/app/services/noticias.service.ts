import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
// conexion dinamica con la api y los parametros del form 
  getNoticias(parametros:any): Observable<any>{
    const url='https://newsapi.org/v2/top-headlines?country='+parametros.pais +'&category='+ parametros.categoria +'&apiKey=a9c1a38d26a4454fb83fd56e9ae093ae'
   return this.http.get(url);
  }
}