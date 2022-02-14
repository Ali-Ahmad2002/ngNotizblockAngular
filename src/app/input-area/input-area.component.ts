
import { Component, Input, OnInit } from '@angular/core';
import { CurdService } from '../curd.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})

export class InputAreaComponent implements OnInit {
  curd: any = CurdService;


  constructor() { }

  ngOnInit(): void {
    this.newNote();
  }

  newNote() {
    this.curd = new CurdService();
  }

  getNotes(valTitle: any, valText: any) {

    let values = {
      title: valTitle,
      text: valText
    };

    console.log('service', this.curd.notes);
    this.curd.notes.push(values);

  }

}
