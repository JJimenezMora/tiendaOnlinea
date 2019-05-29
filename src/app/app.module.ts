import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// rout or rutas
import { AppRoutingModule } from './app-routing.module';
// componentes
// declarar todos los componentea
import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { FooterComponent } from './comun/footer/footer.component';
import { AboutComponent } from './pagina/about/about.component';
import { ItemComponent } from './pagina/item/item.component';
import { PortafolioComponent } from './pagina/portafolio/portafolio.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AdjuntoComponent } from './adjunto/adjunto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent,
    PortafolioComponent,
    FormularioComponent,
    AdjuntoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
