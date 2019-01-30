import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';

const routes: Routes = [
  {
    path: 'dialogalert',
    component: DialogAlertComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
