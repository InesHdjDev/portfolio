import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: any;
  initContactForm(){
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      _replyto: new FormControl('',[ Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.initContactForm();
  }

}
