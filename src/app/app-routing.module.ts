import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component
import { AboutComponent } from './pagina/about/about.component';
import { PortafolioComponent } from './pagina/portafolio/portafolio.component';
import { ItemComponent } from './pagina/item/item.component';
import { AdjuntoComponent } from './adjunto/adjunto.component';


const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: 'adjunto', component: AdjuntoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


@NgModule({
  declarations: [AdjuntoComponent],
  imports: [
  RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
