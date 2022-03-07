
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../crud.service';


@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss'],
})

export class InputAreaComponent implements OnInit {
  // @ViewChild('alert') alert: any;
  @ViewChild('urgencyColor') urgencyColor: any;
  selected = '';
  bgColor!: string;
  deletedNote: number = 0;
  id: any;

  showOverlay: boolean = false;
  title: any;
  textarea: any;
  urgency: any;
  overlay: boolean = false;


  constructor(public crud: CrudService) { }

  ngOnInit(): void {
    this.newNote();
    this.crud.loadNotes();
    console.log('notes', this.crud.notes.title);
  }

  newNote() {
    this.crud = new CrudService();
  }

  addNotes(title: any, textarea: any, selectedColor: any) {
    if (title.length && textarea.length > 0) {
      let values = {
        title: title,
        text: textarea,
        color: this.crud.getColor(selectedColor)
      };
      
      this.crud.notes.push(values);
      this.crud.saveNotes();
      console.log(values.color);
    } else {
      this.overlay = true;
    }
    setTimeout(() => {
      this.overlay = false;
    }, 1300);
  }

  


  // changeColor(color: string) {
  //   if (this.selected == 'option1') {
  //     color = 'red';
  //     this.urgencyColor.nativeElement.style = `background-color: ${color}`;
  //   } else if (this.selected == 'option2') {
  //     color = 'blue';
  //     this.urgencyColor.nativeElement.style = `background-color: ${color}`;
  //   } else if (this.selected == 'option3') {
  //     color = 'green';
  //     this.urgencyColor.nativeElement.style = `background-color: ${color}`;
  //   }
  // }


  clearAllNotes() {
    let i = this.deletedNote % this.crud.notes.length;
    this.crud.notes.splice(i);
    this.crud.trash.push(i);
    this.crud.saveNotes();
    this.deletedNote++;
  }


  deletNote(i: string) {
    let index = Number = this.crud.notes.indexOf(i);
    this.crud.notes.splice(index, 1);
    this.crud.trash.push(i);
    this.crud.saveNotes();
    console.log('theTrash:', this.crud.trash);
  }


  addToArchiv(notes: string) {
    let index = Number = this.crud.notes.indexOf(notes);
    this.crud.notes.splice(index, 1);
    this.crud.archives.push(notes);
    this.crud.saveNotes();
  }

}
