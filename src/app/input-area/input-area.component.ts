
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


  constructor(public Crud: CrudService,) { }

  ngOnInit(): void {
    this.newNote();
    this.loadNotes();
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
      console.log('service', this.crud.notes);
      this.crud.notes.push(values);
      this.saveNotes();
     
    } else {
      console.log('bitte füllen sie die felder aus');
    }
  }

  saveNotes() {
    let savedNote = JSON.stringify(this.crud.notes);
    // let savedText = JSON.stringify(this.crud.notes['text']);
    localStorage.setItem('note', savedNote);
    // localStorage.setItem('text', savedText);
  }

  clearAllNotes(i: string) {
    this.crud.notes.splice(i);
    this.saveNotes();
  }

  loadNotes() {
    let loadedNote = localStorage.getItem('note');
    // let loadedText = localStorage.getItem('text');
    if (loadedNote) {
      this.crud.notes = JSON.parse(loadedNote);
      // this.crud.notes = JSON.parse(loadedText);
    }
  }

  deletNote(i: string) {
    let index = Number = this.crud.notes.indexOf(i);
    this.crud.trash.push(i);
    this.crud.notes.splice(index, 1);
    console.log('theTrash:', this.crud.trash);
    this.saveNotes();
  }

}
