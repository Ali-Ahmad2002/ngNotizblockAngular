
export class Service {

    note: any;

    notes: string[] = [];
    trash: string[] = ['test'];
    archives: string[] = [];


    constructor() {
        this.getNotes();
    }

    getNotes() {
        for (let i = 0; i < this.notes.length; i++) {
            this.note = this.notes[i];
        }
    }

}