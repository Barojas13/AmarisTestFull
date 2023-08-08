import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/materia.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './view/layout/layout.component';

import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
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
    HttpClientModule,
    MatTableModule
  ],
  providers: [MaterialModule,MatTableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
