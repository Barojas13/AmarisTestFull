import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employeeResponse } from '../../entity/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  GetEmployeeId(id : number): Observable<employeeResponse> 
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<employeeResponse>(`${environment.url_api}/Usuario/GetById`, {params:queryParams})
    .pipe(
      map( resp => {
        return resp
      })
    );
  }
  GetAll(): Observable<employeeResponse> 
  {
    let queryParams = new HttpParams();
    return this.http.get<employeeResponse>(`${environment.url_api}/Usuario/GetById`)
    .pipe(
      map( resp => {
        return resp
      })
    );
  }
}
