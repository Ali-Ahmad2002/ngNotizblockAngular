
import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
})

export class InputAreaComponent implements OnInit {
  @Input() crud: any = CrudService;
  showOverlay: boolean = false;
  title: any;
  textarea: any;


  constructor(public Crud: CrudService) { }

  ngOnInit(): void {
    this.newNote();
    this.crud.loadNotes();
    console.log('notes', this.crud.notes);
  }

  newNote() {
    this.crud = new CrudService();
  }

  addNotes(valTitle: any, valText: any) {
    if (valTitle.length && valText.length > 0) {
      let values = {
        title: valTitle,
        text: valText
      };
      this.crud.notes.push(values);
      this.crud.saveNotes();

    } else {
      console.log('bitte füllen sie die felder aus');
    }
  }



  clearAllNotes(i: string) {
    this.crud.notes.splice(i);
    this.crud.saveNotes();
  }


  deletNote(i: string) {
    let index = Number = this.crud.notes.indexOf(i);
    this.crud.notes.splice(index, 1);
    this.crud.trash.push(i);
    this.crud.saveNotes();
    console.log('theTrash:', this.crud.trash);
  }

}
