import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-notes-area',
  templateUrl: './notes-area.component.html',
  styleUrls: ['./notes-area.component.scss']
})
export class NotesAreaComponent implements OnInit {

  crud = new CrudService();

  constructor() { }

  ngOnInit(): void {
  }

}
