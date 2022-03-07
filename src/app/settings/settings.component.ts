import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public service: CrudService) { }

  ngOnInit(): void {
  }

  changeColor(color: any) {
    console.log('color is:', color);
    this.service.bgColors.push(color);
    return this.service.bgColors;
  }

}
