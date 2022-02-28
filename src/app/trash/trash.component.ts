import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  // @Input() crud: any = CrudService;

  title: any;
  textarea: any;

  constructor(public serviceCrud: CrudService) { }

  ngOnInit(): void {
    this.serviceCrud.loadNotes();
    console.log('loaded', this.serviceCrud.trash);
    console.log('crud', this.serviceCrud.trash);
    // this.newTrash();
  }

  // newTrash() {
  //   this.crud = new CrudService();
  //   console.log(this.crud);
  // }

  // loadTheTrash() {
  //   if (this.crud.trash.length == 0) {
  //     return
  //   } else this.crud.loadNotes();
  // }

  deletNote(trashNote: any) {
    let index = this.serviceCrud.trash.indexOf(trashNote);
    this.serviceCrud.trash.splice(index, 1);
    this.serviceCrud.saveNotes();
  }

  backToNotes(trash: string) {
    let index = this.serviceCrud.notes.indexOf(trash);
    this.serviceCrud.trash.splice(index, 1);
    this.serviceCrud.notes.push(trash);
    this.serviceCrud.saveNotes();
  }


}
