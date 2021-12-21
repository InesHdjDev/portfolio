import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { throwError } from 'rxjs';
import { GlobalService } from '../services/global.service';

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
      email: new FormControl('',[ Validators.required, Validators.email]),
      _subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      _captcha: new FormControl("false"),
      //_next: new FormControl("https://localhost:4200/thankyoupage/"),
    })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    public translate: TranslateService,
    public global: GlobalService
  ) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  showResponse(event: any){

  }

  sendMessage(btn: any){
    if (this.contactForm.valid) {
      btn.disabled = true
      
      /* const data = <any>{
        name: this.contactForm.get("name").value,
        email: this.contactForm.get("email").value,
        message: "_subject: \n" + this.contactForm.get("_subject").value + "\n MESSAGE: \n" + this.contactForm.get("message").value,
      } */
  
      this.http.post("https://formsubmit.co/a7d812d5314e8ead9d1c31d63bce1b97", this.contactForm.value).subscribe(
        res =>{
          this.complete = true;
          this.messageService.add({key: 'KeyContact', severity:'success', summary:this.translate.instant('cantact.form.feedback.success_summary'), detail: this.translate.instant('cantact.form.feedback.success') });
          setTimeout(() => {
            btn.disabled = false;
          }, 1000);
          console.log("res")
        },
        err =>{
          this.complete = false;
          btn.disabled = false;
          this.handleErrorFunction(err);
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

  handleErrorFunction(error: any) {
    console.log(" handleErrorFunction ", error?.status, error);
    this.messageService.clear();
    switch (error.status) {
      case 0: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: this.translate.instant('cantact.form.feedback.error_0')});
        break;
      }
      case 400:
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: JSON.stringify(error)});
        break;
      case 401: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: this.translate.instant('cantact.form.feedback.error_401')});
        break;
      }
      case 403: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: this.translate.instant('cantact.form.feedback.error_403')});
        break;
      }
      case 404: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: this.translate.instant('cantact.form.feedback.error_404')});
        break;
      }
      case 422: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: JSON.stringify(error)});
        break;
      }
      case 500: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary_fatal'), detail: this.translate.instant('cantact.form.feedback.error_500')});
        break;
      }
      case 502: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary_fatal'), detail: this.translate.instant('cantact.form.feedback.error_500')});
        break;
      }
      case 504: {
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary_fatal'), detail: this.translate.instant('cantact.form.feedback.error_500')});
        break;
      }
      default:
        this.messageService.add({key: 'KeyContact', severity:'error', summary: this.translate.instant('cantact.form.feedback.error_summary'), detail: this.translate.instant('cantact.form.feedback.error')});
        break;
    }
  };

}
