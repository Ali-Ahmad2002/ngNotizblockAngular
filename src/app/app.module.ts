import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesAreaComponent } from './notes-area/notes-area.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { NotesService } from './services/notes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesAreaComponent,
    InputAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
