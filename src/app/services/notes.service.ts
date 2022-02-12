import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

 public notes = [
    {
      "title": ['hello'],
      "notes": ['was']
    }
  ];
  public trash: string[] = [];
  public archives: string[] = []; 



  constructor(_public: NotesService ) { }
}
