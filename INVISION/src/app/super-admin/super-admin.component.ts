import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvisionService } from '../invision.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {
  superAdminForm!:FormGroup
  superAdmin:any;
  currentSuperAdmin:any;
  editMode:boolean=false;
  superAdminId:any;
  constructor(private fb:FormBuilder,private loginservice: InvisionService) { }

  ngOnInit(): void {
    this.superAdminForm=this.fb.group({
      employeeName:this.fb.control(null,Validators.required),
      employeeCode:this.fb.control(null,Validators.required),
      employeeEmail:this.fb.control(null,Validators.required)
    });
    this.getAllSuperAdminDetails();
    

  }

  addsuperAdmin(){
    if(this.superAdminForm.valid&& !this.editMode){
      this.loginservice.postSuperAdminDetails(this.superAdminForm.value).subscribe({
        next:(value)=> {
          this.superAdminForm.reset();
          alert("details added");
          this. getAllSuperAdminDetails();
        },
        error:()=>{
          alert("error occured");
        }
      })
        }
        else{
          this.loginservice.editSuperAdmin(this.superAdminForm.value,this.superAdminId).subscribe(data=>{
            // this.loginservice.getSuperAdminDetails().subscribe(this.superAdmin=data);
          this. getAllSuperAdminDetails();
            this.editMode=false
          })
        }
// this.editMode=false;
  }

  getAllSuperAdminDetails(){
    this.loginservice.getSuperAdminDetails().subscribe({
      next:(value)=>{
        console.log(value);
        this.superAdmin=value;
      },
      error:()=>{
        alert('error');
        
      }
    })
  }


  //edit super admin
  editSuperAdmin(id:any){
    this.superAdminId=id;
    this.editMode=true;
    this.currentSuperAdmin=this.superAdmin.find((d:any)=>{
      return d.id==id;
    });
    console.log(this.currentSuperAdmin);
    this.superAdminForm.setValue({
      employeeName:this.currentSuperAdmin.employeeName,
      employeeCode:this.currentSuperAdmin.employeeCode,
      employeeEmail:this.currentSuperAdmin.employeeEmail,
    })
    // this. getAllSuperAdminDetails();

  }

  deleteSuperAdmin(id:any){
this.loginservice.deleteSuperAdmin(id).subscribe(data=>{
  this. getAllSuperAdminDetails();
})
  }
}
