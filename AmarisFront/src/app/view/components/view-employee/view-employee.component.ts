import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/entity/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { LoadingModalService } from 'src/app/services/LoadingModal/loading-modal.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})
export class ViewEmployeeComponent implements OnInit {

  showSpinner: boolean = false;
  clickButton = false;
  idEmpleado: string = '';
  data: employee[] = [];
  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  
  constructor(private employeesService : EmployeesService, private loadingModalService: LoadingModalService) { }

  ngOnInit(): void {
  }

  searchEmpleyee() {
    
    this.clickButton = false;
    this.showSpinner = true;

    if(!this.idEmpleado || this.idEmpleado.trim() === ''){
      this.employeesService.GetAll().subscribe(item=>{
     
        this.data = item;
        this.clickButton = true;
        this.showSpinner = false;
  
        this.displayedColumns = Object.keys(this.data[0]);
        this.columnsToDisplay = this.displayedColumns.slice();
  
      });  
    }else{
      this.employeesService.GetEmployeeId(parseInt(this.idEmpleado)).subscribe(item=>{

        this.data.push(item);
        this.clickButton = true;
        this.showSpinner = false;
  
        this.displayedColumns = Object.keys(this.data[0]);
        this.columnsToDisplay = this.displayedColumns.slice();
  
      });  
    }
  }
}
