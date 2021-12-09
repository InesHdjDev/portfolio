import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  changeLang(lang: string){
    let paths = window.location.pathname.split('/')
    //if(paths.includes('en') || paths.includes('fr') || paths.includes('ar')){
    //}
    const index = paths.findIndex(x => (x === 'en' || x === 'fr' || x === 'ar'));
    if(index !== -1){
      paths = paths.slice(2, paths.length);
    }
    let url = location.origin + lang + '/' + paths.join('/')
    location.replace(url)
  }

}
