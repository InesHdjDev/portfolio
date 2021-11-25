import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-checkmark',
  templateUrl: './loader-checkmark.component.html',
  styleUrls: ['./loader-checkmark.component.scss']
})
export class LoaderCheckmarkComponent implements OnInit {

  @Input() complete: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
