import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  complete: boolean = false;

  contactForm: any;
  initContactForm(){
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      _replyto: new FormControl('',[ Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  sendMessage(btn: any){
    if (this.contactForm.valid) {
      btn.disabled = true
      
      const data = <any>{
        name: this.contactForm.get("name").value,
        _replyto: this.contactForm.get("_replyto").value,
        message: "SUBJECT: \n" + this.contactForm.get("subject").value + "\n MESSAGE: \n" + this.contactForm.get("message").value,
      }
  
      this.http.post("https://formspree.io/f/mgergyrb", data).subscribe(
        res =>{
          this.messageService.add({key: 'KeyContact', severity:'success', summary:'Message', detail:'Envoyé avec Succès'});
          this.complete = true;
          setTimeout(() => {
            btn.disabled = false;
          }, 1000);
          console.log("res")
        },
        err =>{
          this.complete = false;
          btn.disabled = false;
          this.messageService.add({key: 'KeyContact', severity:'error', summary:'Error', detail: JSON.stringify(err)});
          console.log("err")
        }
      )
    }else{
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      this.complete = false;
      btn.disabled = false;
    }
  }

}
