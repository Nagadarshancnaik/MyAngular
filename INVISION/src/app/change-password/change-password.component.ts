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
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginservice: InvisionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required),
    });
  }
  onSubmit() {
    // console.log(this.myForm);
    this.loginservice.getpass().subscribe((data: any) => {
      console.log(data);
      for (let d of data) {
        if (
          this.myForm.get('name')?.value == d.name &&
          this.myForm.get('password')?.value == d.pass
        ) {
          this.count++;
          break;
        }
      }
      if (this.count == 1) {
        console.log('password matched');
        this.router.navigate(['/home']);
      }
      else{
        alert("invalid password")
      }
    });
  }
}