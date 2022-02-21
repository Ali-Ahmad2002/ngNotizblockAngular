import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public title: any;
  public text: any;

  public notes = [];
  public trash = [
    {
      title:'hard',
      text:'gecoded'
    }
  ];
  public archives = [];

  constructor() { }

  saveNotes() {
    let savedNote = JSON.stringify(this.notes);
    // let savedText = JSON.stringify(this.crud.notes['text']);
    localStorage.setItem('note', savedNote);
    // localStorage.setItem('text', savedText);
  }

  loadNotes() {
    let loadedNote = localStorage.getItem('note');
    // let loadedText = localStorage.getItem('text');
    if (loadedNote) {
      this.notes = JSON.parse(loadedNote);
      // this.crud.notes = JSON.parse(loadedText);
    }
  }
}
