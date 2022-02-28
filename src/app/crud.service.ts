import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // public title: any;
  // public text: any;

  public notes: any = [];
  public trash: any = [];
  public archives: any = [];

  constructor() { }

  saveNotes() {
    let savedNote = JSON.stringify(this.notes);
    let savedTrash = JSON.stringify(this.trash);
    let savedArchiv = JSON.stringify(this.archives);
    localStorage.setItem('note', savedNote);
    localStorage.setItem('trash', savedTrash);
    localStorage.setItem('archives', savedArchiv);
  }

  loadNotes() {
    let loadedNote: any = localStorage.getItem('note');
    let loadedTrash: any = localStorage.getItem('trash');
    let loadedArchiv: any = localStorage.getItem('archives');
    if (loadedNote && loadedTrash && loadedArchiv) {
      this.notes = JSON.parse(loadedNote);
      this.trash = JSON.parse(loadedTrash);
      this.archives = JSON.parse(loadedArchiv);
    } else {
      console.log('TEST');
    }
  }
}
