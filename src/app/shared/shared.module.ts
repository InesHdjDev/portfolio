import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderCheckmarkComponent } from './loader-checkmark/loader-checkmark.component';
import { LinksBarComponent } from './links-bar/links-bar.component';



@NgModule({
  declarations: [
    LoaderCheckmarkComponent,
    LinksBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderCheckmarkComponent,
    LinksBarComponent
  ]
})
export class SharedModule { }
