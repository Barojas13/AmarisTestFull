import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { employee } from 'src/app/entity/employee';


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


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  empl: employee[] = [];

  constructor(private employeesService : EmployeesService) { 
    
  }

  ngOnInit(): void {
    this.employeesService.GetAll().subscribe(item=>{
     
      this.empl = item;
      console.log(this.empl);
    });
  }
  displayedColumns: string[] = ['id', 'title', 'price', 'description','state', 'stock','discount','actions'];
  products: Product[] =[
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

/*  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

}
