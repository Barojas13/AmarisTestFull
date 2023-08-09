import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/materia.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule  } from '@angular/router';
import { LayoutComponent } from './view/layout/layout.component';

import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './view/home/home.component';
import { ViewEmployeeComponent } from './view/components/view-employee/view-employee.component';
import {MatInputModule} from '@angular/material/input';
import { LoadingModalComponent } from './shared/components/loading-modal/loading-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ViewEmployeeComponent,
    LoadingModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
