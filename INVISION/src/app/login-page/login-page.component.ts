import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvisionService } from '../invision.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  count: any = 0;
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginservice: InvisionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myForm = this.fb.group ( {
      name: this.fb.control(null, [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      password: this.fb.control(null, [Validators.required,Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    });
  }
  onSubmit() {
    // console.log(this.myForm);

     localStorage.setItem("employee",(JSON.stringify(this.myForm.value)))

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
