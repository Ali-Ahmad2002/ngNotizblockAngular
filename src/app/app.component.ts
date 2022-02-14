import { Component } from '@angular/core';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngNotizblock';

  constructor(public crud: CurdService) {

  }

}
