import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HereosComponent} from './hereos/hereos.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes : Routes = [{path:'heroes', component:HereosComponent}, {
  path:'dashboard', component:DashboardComponent
}];
@NgModule({
  exports: [RouterModule],
  imports:[RouterModule.forRoot(routes)]
})


export class AppRoutingModule {
}
