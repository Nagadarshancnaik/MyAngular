import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
const materialComponent:any=[MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule]
@NgModule({

  imports: [materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
