import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//COMPONENTES QUE USA EL APP
import { AboutUsComponent } from "./about-us/about-us.component";
import { EventosComponent } from "./eventos/eventos.component";
import { AlbumsComponent } from "./albums/albums.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ForoComponent } from "./foro/foro.component";
import { RegistroComponent } from './registro/registro.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const appRoutes: Routes=[
  
  {path:'eventos',component:EventosComponent},
  {path:'album',component:AlbumsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'foro',component:ForoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'contactanos', component:ContactanosComponent},
  {path: 'inicio', component:InicioComponent},
  {path: '', component:InicioComponent},
  {path:'**',redirectTo:""},

];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
