import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { employee } from 'src/app/entity/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { LoadingModalService } from 'src/app/services/LoadingModal/loading-modal.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/shared/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {

  showSpinner: boolean = false;
  clickButton = false;
  idEmployee: string = '';
  data: employee[] = [];
  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  
  constructor(private employeesService : EmployeesService, private loadingModalService: LoadingModalService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  searchEmpleyee() {
    
    this.clickButton = false;
    this.showSpinner = true;
    this.data = [];

    if(!this.idEmployee || this.idEmployee.trim() === ''){
      this.consultGetAllEmployees();
    }else{
      this.consultGetByIdEmployees();
    }
  }
  
  viewAlert(icon :string, message: string){
    this.dialog.open(AlertDialogComponent, {
      data: {
        icon: icon,
        message: message
      }
    });
  }

  consultGetAllEmployees(){
    this.employeesService.GetAll().pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error.status);

        if(error.status === 404){
          this.viewAlert('error', 'El servicio fallo despues de varios reintentos, por favor intente de nuevo');
        }

        if(error.status === 500){
          this.viewAlert('error', 'No existe este Id, por favor intente con otro valor');
        }

        this.showSpinner = false;
        return throwError(error);
      })
    )
    .subscribe(item=>{
   
      this.data = item;
      this.clickButton = true;
      this.showSpinner = false;

      this.displayedColumns = Object.keys(this.data[0]);
      this.columnsToDisplay = this.displayedColumns.slice();
    });  
  }

  consultGetByIdEmployees(){

    this.employeesService.GetEmployeeId(parseInt(this.idEmployee))
    .pipe(
      catchError(error => {
        console.error('Error al obtener datos:', error.status);

        if(error.status === 404){
          this.viewAlert('error', 'El servicio fallo despues de varios reintentos, por favor intente de nuevo');
        }

        if(error.status === 500){
          this.viewAlert('error', 'No existe este Id, por favor intente con otro valor');
        }

        this.showSpinner = false;
        return throwError(error);
      })
    )
    .subscribe(item=>{

      this.data.push(item);
      this.clickButton = true;
      this.showSpinner = false;

      this.displayedColumns = Object.keys(this.data[0]);
      this.columnsToDisplay = this.displayedColumns.slice();

    });  
  }
}
