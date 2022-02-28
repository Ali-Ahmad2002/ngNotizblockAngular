import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivComponent } from './archiv/archiv.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  { path: '', component: InputAreaComponent },
  { path: 'trash', component: TrashComponent },
  { path: 'archiv', component: ArchivComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
