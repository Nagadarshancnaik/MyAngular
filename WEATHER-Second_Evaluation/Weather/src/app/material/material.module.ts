import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
const materialComponent:any=[MatIconModule,
  MatInputModule,
  MatFormFieldModule]
@NgModule({

  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
