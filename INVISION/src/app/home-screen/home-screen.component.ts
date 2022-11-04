import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonHomeScreenComponent } from '../button-home-screen/button-home-screen.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
showMe=false
showMe2=true;
  constructor( public dialog:MatDialog) { }
  openDialog(){
    this.showMe=!this.showMe;
  }
  
  superAdmin(){
    const dialogRef = this.dialog.open(SuperAdminComponent);
  }
  admin(){
    const dialogRef = this.dialog.open(AdminComponent);
  }

  ngOnInit(): void {

  }

}
