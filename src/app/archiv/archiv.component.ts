import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.scss']
})
export class ArchivComponent implements OnInit {

  constructor(public serviceCrud: CrudService) { }

  ngOnInit(): void {
    this.serviceCrud.loadNotes();
  }

  deletNote(archivNote: any) {
    let index = this.serviceCrud.archives.indexOf(archivNote);
    this.serviceCrud.archives.splice(index, 1);
    this.serviceCrud.trash.push(archivNote);
    this.serviceCrud.saveNotes();
  }

  backToNotes(archiv: string) {
    let index = this.serviceCrud.archives.indexOf(archiv);
    this.serviceCrud.archives.splice(index, 1);
    this.serviceCrud.notes.push(archiv);
    this.serviceCrud.saveNotes();
  }

}
