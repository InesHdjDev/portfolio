import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-bar',
  templateUrl: './links-bar.component.html',
  styleUrls: ['./links-bar.component.scss']
})
export class LinksBarComponent implements OnInit {

  @Input() display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
