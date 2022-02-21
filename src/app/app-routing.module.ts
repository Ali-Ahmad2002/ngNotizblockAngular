import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputAreaComponent } from './input-area/input-area.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  { path: '', component: InputAreaComponent },
  { path: 'trash', component: TrashComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
