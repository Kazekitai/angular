import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { BoutonOpinionComponent } from './bouton-opinion/bouton-opinion.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueService } from './shared/service/collegue.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { VueTableauComponent } from './vue-tableau/vue-tableau.component';
import { VueClassiqueComponent } from './vue-classique/vue-classique.component';
import { VueCarrouselComponent } from './vue-carrousel/vue-carrousel.component';
import { FormCollegueComponent } from './form-collegue/form-collegue.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { LimiteNbColleguesComponent } from './limite-nb-collegues/limite-nb-collegues.component';


const appRoutes: Routes = [
{ path: 'classique', component: VueClassiqueComponent }, 
{ path: 'tableau', component: VueTableauComponent },
{ path: 'carousel', component: VueCarrouselComponent },
{ path: 'detail/:pseudo', component: DetailCollegueComponent },
{ path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    BoutonOpinionComponent,
    MenuComponent,
    VueTableauComponent,
    VueClassiqueComponent,
    VueCarrouselComponent,
    FormCollegueComponent,
    DetailCollegueComponent,
    LimiteNbColleguesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
