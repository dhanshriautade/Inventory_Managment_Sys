import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {AccordionModule} from 'primeng/accordion';  
import {MenuItem} from 'primeng/api';
import { TeamComponent } from './components/team/team.component';
import { DeviceComponent } from './components/device/device.component';
import { MaintanceComponent } from './components/maintance/maintance.component';   



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    TeamComponent,
    DeviceComponent,
    MaintanceComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    ReactiveFormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
