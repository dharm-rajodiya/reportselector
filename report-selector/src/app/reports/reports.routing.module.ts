import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ProductComponent } from './product.component';
import { SelectionComponent } from './selection/selection.component';
import { SelectionDetailsComponent } from './selection-details/selection-details.component';

const routes: Routes = [
  {
    path: 'reports',
    component: SelectionComponent,
    children: [
      {
        path: '',
        component: SelectionComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: SelectionDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReportsRoutingModule { }
