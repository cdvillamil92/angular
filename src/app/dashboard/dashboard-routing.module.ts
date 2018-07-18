import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Route, extract } from '@app/core';


const routes: Routes = [
 Route.withShell([
	{ path: 'dashboard', component: DashboardComponent, data: { title: extract('Dasboard') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
   