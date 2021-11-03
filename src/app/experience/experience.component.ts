import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef
    ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.el.nativeElement.querySelector("#experience-top-section").classList.add('fadeInUp');
    }
    if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
      this.el.nativeElement.querySelector("#experience-left-section").classList.add('fadeInLeft');
      this.el.nativeElement.querySelector("#experience-right-section").classList.add('fadeInRight');
    }
  }

}
