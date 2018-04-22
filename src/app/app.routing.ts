import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//COMPONENTES QUE USA EL APP
import { AboutUsComponent } from "./about-us/about-us.component";
import { EventosComponent } from "./eventos/eventos.component";
import { AlbumsComponent } from "./albums/albums.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
const appRoutes: Routes=[
  
  {path:'eventos',component:EventosComponent},
  {path:'album',component:AlbumsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: '', component:InicioComponent},
  {path:'**',redirectTo:""}

];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
