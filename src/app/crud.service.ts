import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public notes = [];
  public trash = [];
  public archives = [];

  constructor() { }
}
