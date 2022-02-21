import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { CrudService } from './crud.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrashComponent } from './trash/trash.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputAreaComponent,
    TrashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
