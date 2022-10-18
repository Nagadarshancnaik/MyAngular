import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const MaterialComponents=[
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule
  
]
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents] 
})
export class MaterialModule { }
   