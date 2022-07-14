import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionComponent } from './selection/selection.component';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';
import { MaterialModule } from '../shared/material.module';
@NgModule({
  declarations: [
    SelectionComponent,
    SelectionDetailsComponent
  ],
  imports: [CommonModule, MaterialModule],
  providers: [],
})
export class ReportsModule { }
