import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SekolyComponent } from './sekoly/sekoly.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservableComponent } from './observable/observable.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ContactComponent } from './contact/contact.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SekolyComponent,
    ObservableComponent,
    PereComponent,
    FilsComponent,
    FormulaireComponent,
    ContactComponent,
    ConnectComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
