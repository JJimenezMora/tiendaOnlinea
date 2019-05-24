import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rout or rutas
import { AppRoutingModule } from './app-routing.module';
// componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './comun/header/header.component';
import { FooterComponent } from './comun/footer/footer.component';
import { AboutComponent } from './pagina/about/about.component';
import { ItemComponent } from './pagina/item/item.component';
import { PortafolioComponent } from './pagina/portafolio/portafolio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
