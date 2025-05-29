import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { enviroment } from '../enviroment/enviroment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = enviroment.apiUrl

  constructor(private http: HttpClient) { }


  getproduct(endpoint: any) {
    return this.http.get(this.baseUrl + endpoint)
  }

  addProduct(prodData: any) {
    return this.http.post(this.baseUrl + 'api/addProd', prodData)
  }

  deleteProduct(id: any) {
    return this.http.delete(this.baseUrl + `api/delProd/${id}`)
  }
}
