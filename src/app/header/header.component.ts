import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigateTrash() {
    this.route.navigateByUrl('/trash');
  }

  openDialog() {
    this.dialog.open(SettingsComponent);
  }

}
