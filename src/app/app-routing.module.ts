import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './View/employee-list/employee-list.component';
import { SimpleEmployeeListComponent } from './View/simple-employee-list/simple-employee-list.component';

const routes: Routes = [
  {path: 'employeelist', component: EmployeeListComponent},
  {path: 'simpleemployeelist', component: SimpleEmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
