import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){


  }
 }
