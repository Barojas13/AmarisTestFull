import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './view/layout/layout.component';
import { HomeComponent } from './view/home/home.component';
import { ViewEmployeeComponent } from './view/components/view-employee/view-employee.component';

const routes: Routes = [
  { path: '',
     component: LayoutComponent,
     children:[
        { path : '',  redirectTo : 'home', pathMatch : 'full' },
        { path: 'home', component: HomeComponent},
        { path: '**', pathMatch: 'full', component: HomeComponent },
        { path: 'viewEmployee', pathMatch: 'full', component: ViewEmployeeComponent }

      ]  
  }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
