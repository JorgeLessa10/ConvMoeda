import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListarSimbolosService {

  constructor(private http: HttpClient) { }

  listarSimbolos(): Observable<any>{
    return this.http.get("https://api.exchangerate.host/symbols");
  }
}
