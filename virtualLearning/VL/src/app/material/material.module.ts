import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

const materials = [
  MatIconModule,
  MatInputModule,
  CommonModule,
  MatDialogModule
  
]
@NgModule({
  exports: [materials],
  imports: [
    materials
  ]
})
export class MaterialModule { }
