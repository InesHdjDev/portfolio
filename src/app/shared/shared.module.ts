import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderCheckmarkComponent } from './loader-checkmark/loader-checkmark.component';



@NgModule({
  declarations: [
    LoaderCheckmarkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderCheckmarkComponent
  ]
})
export class SharedModule { }
