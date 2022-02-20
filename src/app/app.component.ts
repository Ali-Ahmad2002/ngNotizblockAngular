import { Component } from '@angular/core';
import { CrudService } from './crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngNotizblock';

  constructor(public crud: CrudService) {

  }

}
