import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component
import { AboutComponent } from './pagina/about/about.component';
import { PortafolioComponent } from './pagina/portafolio/portafolio.component';
import { ItemComponent } from './pagina/item/item.component';


const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
