import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PrecommandeComponent } from './precommande/precommande.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NbrCdComponent } from './nbr-cd/nbr-cd.component'

const appRoutes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'precommande', component:PrecommandeComponent },
  { path: 'nombreCD', component: NbrCdComponent },
  {path: 'form', component:FormComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    PrecommandeComponent,
    FormComponent,
    NbrCdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
