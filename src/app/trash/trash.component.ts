import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(public crud: CrudService) { }

  ngOnInit(): void {
    this.crud.loadNotes();
    console.log('theTrash:', this.crud.trash);
  }

  deletNote(trashNote: any) {

  }

}
