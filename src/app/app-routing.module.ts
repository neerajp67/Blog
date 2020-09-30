import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {OurTeamComponent} from './our-team/our-team.component';

  import { from } from 'rxjs';

const routes: Routes = [
{
  component:AddRestoComponent, 
  path:'add'
},

{
  component:UpdateRestoComponent, 
  path:'update/:id'
},
{
  component:LoginComponent, 
  path:'login'
},
{
  component:RegisterComponent, 
  path:'register'
},
{
  component:ListRestoComponent, 
  path:'list'
},
{
  component:ContactUsComponent, 
  path:'contact'
},
{
  component:OurTeamComponent, 
  path:'ourTeam'
},
{
  component:HomeComponent, 
  path:''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
