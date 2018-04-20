import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//COMPONENTES QUE USA EL APP
import { AboutUsComponent } from "./about-us/about-us.component";
import { EventosComponent } from "./eventos/eventos.component";
import { AlbumsComponent } from "./albums/albums.component";
import { HeaderComponent } from "./header/header.component";
const appRoutes: Routes=[
  
  {path:'eventos',component:EventosComponent},
  {path:"ejemplo",component:AlbumsComponent},
  {path:'**',component:HeaderComponent}

];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
