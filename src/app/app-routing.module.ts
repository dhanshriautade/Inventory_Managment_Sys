import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { DeviceComponent } from './components/device/device.component';

const routes: Routes = [
{path:'' , component:LoginComponent},
{path:'login' , component:LoginComponent},
{path:'register', component:RegisterComponent},

{path:'Main', component:HomeComponent,
children:[
{path:'', redirectTo:'dashboard', pathMatch:'full'},
{path:'dashboard', component:DashboardComponent},
{path:'sidebar', component:SidebarComponent},
{path:'header', component:HeaderComponent},
// {path:'team' ,component:TeamComponent},
// {path:'team' ,component:DeviceComponent},
// {path:'team' ,component:TeamComponent},
]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
