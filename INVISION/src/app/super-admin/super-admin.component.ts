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

  constructor(private fb:FormBuilder,private loginservice: InvisionService) { }

  ngOnInit(): void {
    this.superAdminForm=this.fb.group({
      employeeName:this.fb.control(null,Validators.required),
      employeeCode:this.fb.control(null,Validators.required),
      employeeEmail:this.fb.control(null,Validators.required)
    });
    this.getAllEmployeeDetails();
  }

  onSubmit(){
    if(this.superAdminForm.valid){
      this.loginservice.postEmployeeDetail(this.superAdminForm.value).subscribe({
        next:(value)=> {
          alert("details added");
          this.superAdminForm.reset();
        },
        error:()=>{
          alert("error occured");
        }
      })
    }
  }

  getAllEmployeeDetails(){
    this.loginservice.getEmployeeDetail().subscribe({
      next:(value)=>{
        console.log(value);
      },
      error:()=>{
        alert('error');
        
      }
    })
  }
}
