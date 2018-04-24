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
import { EditarPerfilComponent } from "./editar-perfil/editar-perfil.component";
import { RegistroComponent } from './registro/registro.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DetalleForoComponent } from './detalle-foro/detalle-foro.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { CrearAlbumComponent } from './crear-album/crear-album.component';
import { EditarAlbumComponent } from './editar-album/editar-album.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { TemporalEvento1Component } from './temporal-evento1/temporal-evento1.component';
import { TemporalEvento2Component } from './temporal-evento2/temporal-evento2.component';
import { TemporalEvento3Component } from './temporal-evento3/temporal-evento3.component';

const appRoutes: Routes=[
  
  {path:'eventos',component:EventosComponent},
  {path:'album',component:AlbumsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'foro',component:ForoComponent},
  {path:'detalleForo/:idForo',component:DetalleForoComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'miPerfil', component:EditarPerfilComponent},
  {path:'newEvent', component:CrearEventoComponent},
  {path:'newAlbum', component:CrearAlbumComponent},
  {path:'myAlbum', component:EditarAlbumComponent},
  {path:'myEvento', component:EditarEventoComponent},
  {path:'tempEvento1', component:TemporalEvento1Component},
  {path:'tempEvento2', component:TemporalEvento2Component},
  {path:'tempEvento3', component:TemporalEvento3Component},
  {path:'', component:InicioComponent},
  {path:'**',redirectTo:""},

];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
