import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MobileFilterDialogComponent } from '../mobile-filter-dialog/mobile-filter-dialog.component';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  mblextend = false;
  mblheader = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  mblSearch() {
    // this.mblextend = true;
    // this.mblheader = false;
  }


}
