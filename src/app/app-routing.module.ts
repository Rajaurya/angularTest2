import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { Layout0Component } from './layout0/layout0.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AgentComponent } from './agent/agent.component';
import { PropertiesComponent } from './properties/properties.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
{ path: 'deshboard',canActivate:[AuthGuard],component:Layout0Component,children:[
           {path: '',component:HomeComponent},
           {path:'Contact',component:ContactComponent},
           {path:'Agent',component:AgentComponent},
           {path:'Properties',component:PropertiesComponent},
           {path:'Contact',component:ContactComponent},
           {path:'Blog',component:BlogComponent}
]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
