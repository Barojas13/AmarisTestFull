import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/materia.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AlertDialogComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class SharedModule { }
