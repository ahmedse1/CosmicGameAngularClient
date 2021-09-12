import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  "Access-Control-Allow-Credentials": "true",
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Authorization': "Bearer " + sessionStorage.getItem("AuthToken"),
  })
 };

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }

  getAll(url): Observable<any> {
    return this.http.get<any>(environment.baseUrl + url, httpOptions);
  }

  get(url, id): Observable<any> {
    return this.http.get(`${environment.baseUrl + url}/${id}`);
  }

  post(url, data): Observable<any> {
    return this.http.post(environment.baseUrl + url, data);
  }

  update(url, id, data): Observable<any> {
    return this.http.put(`${environment.baseUrl + url}/${id}`, data);
  }

  delete(url, id): Observable<any> {
    return this.http.delete(`${environment.baseUrl + url}/${id}`);
  }

  deleteAll(url): Observable<any> {
    return this.http.delete(environment.baseUrl + url);
  }
}
