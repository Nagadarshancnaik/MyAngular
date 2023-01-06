import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  log: any;
  constructor(private fb: FormBuilder, private loginService: HomeServiceService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control(null),
      password: this.fb.control(null)
    })
  }

  onSubmit() {
    console.log(this.loginForm);
    const body = {
      "userName": this.loginForm.value.username,
      "password": this.loginForm.value.password
    }
    console.log(body);

    this.loginService.login(body).subscribe(data => {
      console.log(data);
      this.log = data;
      if (this.log.message == "Login successful") {
        alert(this.log.message)
        sessionStorage.setItem('token1', JSON.stringify(this.log.access_token))
        this.route.navigate(['/home'])
      }
      else{
        alert("invalid User")
      }
    })
  }

}
