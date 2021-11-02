import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListarSimbolosService {

  constructor(private http: HttpClient) { }
  
  API_URI = 'https://api.exchangerate.host/';

  getSymbolCurrency(): Observable<any>{
    return this.http.get(this.API_URI+'symbols');
  }

  getConvertCurrency(fromCurrency: String, toCurrency: String, amount: number): Observable<any> {
    return this.http.get(this.API_URI + "convert?from=" + fromCurrency + "&to=" + toCurrency + "&amount=" + amount);
  }
}
