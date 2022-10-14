import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForm';
  reactiveForm:FormGroup | undefined;
 
  ngOnInit(){
    this.reactiveForm=new FormGroup({
        biller:new FormControl(null,Validators.required),
        locationcode:new FormControl(null,Validators.required),
        rrno:new FormControl(null,Validators.required),
        personalDetails: new FormGroup({
          name:new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
          email:new FormControl(null,[Validators.required,Validators.email]),
          mblno:new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
        }),
        amount:new FormControl(null,[Validators.required,Validators.pattern("^[0-9]*$")]),
        paymentMethod:new FormControl(null,Validators.required),
        comments:new FormArray([
          new FormControl(null,[Validators.required])
       
        ])
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }
  onCLick(){
    (<FormArray>this.reactiveForm.get('comments')).push(new FormControl(null,[Validators.required]))
  }

  // get biller():FormControl{
  //   return this.reactiveForm.get("biller") as FormControl;
  // }

  // get locationcode():FormControl{
  //   return this.reactiveForm.get("locationcode") as FormControl;
  // }
  // get rrno():FormControl{
  //   return this.reactiveForm.get("rrno") as FormControl;
  // }
  // get name():FormControl{
  //   return this.reactiveForm.get("name") as FormControl;
  // }
  // get email():FormControl{
  //   return this.reactiveForm.get("email") as FormControl;
  // }
  // get mblno():FormControl{
  //   return this.reactiveForm.get("mblno") as FormControl;
  // }
  // get amount():FormControl{
  //   return this.reactiveForm.get("amount") as FormControl;
  // }
  // get paymentMethod():FormControl{
  //   return this.reactiveForm.get("paymentMethod") as FormControl;
  // }
}
