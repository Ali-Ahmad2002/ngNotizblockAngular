import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';	
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { CrudService } from './crud.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrashComponent } from './trash/trash.component';
import { ArchivComponent } from './archiv/archiv.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputAreaComponent,
    TrashComponent,
    ArchivComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
