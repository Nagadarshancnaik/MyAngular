import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvisionService } from '../invision.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  count: any = 0;
  getEmployee:any;
  myForm!: FormGroup;
  employeePass: any;
  id:any;
  constructor(
    private fb: FormBuilder,
    private loginservice: InvisionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getEmployee=localStorage.getItem("employee");
    this.getEmployee=JSON.parse(this.getEmployee);

    this.myForm = this.fb.group({
      newPassword: this.fb.control(null, Validators.required),
      rePassword: this.fb.control(null, Validators.required),

      
    });
    this.loginservice.loginCheck().subscribe(data=>{
      for(let i of data){
        if(i.name==this.getEmployee.name){
          this.id=i.id;
          break;
        }
        
      }
    })
  }

  onSubmit() {
    // console.log(this.myForm);
    if(this.myForm.get("newPassword")?.value===this.myForm.get("rePassword")?.value){
      this.employeePass=this.myForm.get("newPassword")?.value;
      this.loginservice.updateEmployee(this.employeePass,this.getEmployee.name,this.id).subscribe();
      this.router.navigate(['home']);
  
    }
  }
}