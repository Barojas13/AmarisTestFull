import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { employee } from 'src/app/entity/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private employeesService : EmployeesService) { 
    
  }

  ngOnInit(): void {
    
  }
}
