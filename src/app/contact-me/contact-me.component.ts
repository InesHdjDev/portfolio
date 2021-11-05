import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef
    ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      this.el.nativeElement.querySelector("#contact-me").classList.add('fadeInUp');
    }
  }

}
