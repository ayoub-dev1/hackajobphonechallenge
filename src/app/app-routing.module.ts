import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcontactComponent } from './contact/listcontact/listcontact.component';


const routes: Routes = [
	{path: 'list', component:ListcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
