import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Window } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(){ }

  getCurrentLang(){
    return window.location.pathname.split('/')[1];
  }
}
