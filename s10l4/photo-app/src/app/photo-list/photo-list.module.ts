import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule
  ],
  exports: [PhotoListComponent]
})
export class PhotoListModule { }
