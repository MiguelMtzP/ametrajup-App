import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing,appRoutingProviders} from './app.routing'

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ForoComponent } from './foro/foro.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AlbumsComponent } from './albums/albums.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { TruncatePipe } from './pipes/Truncate.pipe';
import { DetalleForoComponent } from './detalle-foro/detalle-foro.component';


@NgModule({
  imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            routing,
            ReactiveFormsModule,
            HttpClientModule,
            TranslateModule.forRoot({
              loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
              }
            })
  ],
  declarations: [
            AppComponent,
            AboutUsComponent,
            InicioComponent,
            HeaderComponent,
            ServiciosComponent,
            EventosComponent,
            ContactanosComponent,
            ForoComponent,
            LoginComponent,
            RegistroComponent,
            AlbumsComponent,
            EditarPerfilComponent,
            TruncatePipe,
            DetalleForoComponent
  ],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}