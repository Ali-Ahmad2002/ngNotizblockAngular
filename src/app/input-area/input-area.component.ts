import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {
  notes: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.notes[0].title);
    
  }

}
