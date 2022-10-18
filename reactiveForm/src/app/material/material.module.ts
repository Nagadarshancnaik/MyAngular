import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



const materialComponent=[
MatButtonModule,
MatRadioModule,
MatInputModule,
MatFormFieldModule,
MatSelectModule, 
MatDatepickerModule,
MatNativeDateModule

]

@NgModule({
  exports:[materialComponent],
  imports: [materialComponent],
})
export class MaterialModule { }
