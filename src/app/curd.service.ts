import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  notes: string[] = [];
  trash: string[] = ['test'];
  archives: string[] = [];

  constructor() { }
}
