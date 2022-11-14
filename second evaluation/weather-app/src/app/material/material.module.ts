import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


const materialComponent:any=[
  MatIconModule,
  MatDialogModule
]
@NgModule({
  exports: [materialComponent],
  imports: [materialComponent]
})
export class MaterialModule { }
