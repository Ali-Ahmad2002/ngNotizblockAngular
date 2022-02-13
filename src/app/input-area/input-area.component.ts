
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/models/service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})

export class InputAreaComponent implements OnInit {

  service: any = new Service();
  // notes: string[] = [];


  constructor() { }

  ngOnInit(): void {
    // this.onSubmit();
  }

  // renderNotes() {
  //   for (let i = 0; i < this.notes.length; i++) {
  //     const note = this.notes[i];
  //   }
  // }

  getNotes(val: any) {
    // this.notes.push(val);
    console.log('service', this.service.notes);
    this.service.notes.push(val);

  }

  // onSubmit(title: string, textarea: string) {
  //   console.log(this.notes);
  //   this.notes.push(title, textarea);
  // }

}
