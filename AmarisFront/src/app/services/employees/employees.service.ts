import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee, employeeResponse } from '../../entity/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  GetEmployeeId(id : number): Observable<any> 
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<employeeResponse>(`${environment.url_api}/Employee/GetListByIdEmployeeAsync`, {params:queryParams})
    .pipe(
      map( resp => {
        return resp.data
      })
    );
  }
  GetAll(): Observable<any[]> 
  {
    let queryParams = new HttpParams();
    return this.http.get<employeeResponse>(`${environment.url_api}/Employee/GetAllEmployee`)
    .pipe(
      map( resp => {
        return resp.data
      })
    );
  }
}
