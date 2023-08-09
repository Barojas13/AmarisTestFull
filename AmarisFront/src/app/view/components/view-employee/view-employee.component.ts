import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/entity/employee';
import { EmployeesService } from 'src/app/services/employees/employees.service';

export interface Product{
  id : string;
  title : string;
  price : number;
  description :string;
  image : string;
  stock: number;
  discount: number;
  state: boolean;
}

const products: Product[] =[
  {
    id : "1",
    title : "sandwiches",
    price : 20000,
    description : "delicioso",
    image : "https://ichef.bbci.co.uk/news/800/cpsprodpb/125FC/production/_103206257_sandwich.png",
    stock: 10,
    discount: 20,
    state: true
  },
  {
    id : "2",
    title : "sandwiches2",
    price : 10000,
    description : "horribles",
    image : "https://ichef.bbci.co.uk/news/800/cpsprodpb/125FC/production/_103206257_sandwich.png",
    stock: 10,
    discount: 20,
    state: true
  }
];  

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  data: employee[] = [];
  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  
  constructor(private employeesService : EmployeesService) { }

  ngOnInit(): void {

    this.employeesService.GetAll().subscribe(item=>{
     
      this.data = item;
      console.log(this.data);

      this.displayedColumns = Object.keys(this.data[0]);
      this.columnsToDisplay = this.displayedColumns.slice();

    });

    
  }

}
