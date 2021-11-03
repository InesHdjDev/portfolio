import { Component, HostListener, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef
    ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.el.nativeElement.querySelector("#about-me").classList.add('fadeInUp');
    }
  }

}
