import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const materialComponent:any =[
  MatInputModule,
  MatFormFieldModule

]
@NgModule({
  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
