import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


const materialComponent:any=[
  MatIconModule,
]
@NgModule({
  exports: [materialComponent],
  imports: [materialComponent]
})
export class MaterialModule { }
