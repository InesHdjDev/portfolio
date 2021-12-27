import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { SharedModule } from './shared/shared.module';
import {ButtonModule} from 'primeng/button';
import {ScrollTopModule} from 'primeng/scrolltop';
import { APP_BASE_HREF } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FatalComponent } from './fatal/fatal.component';
import { ErrorOccurredComponent } from './error-occurred/error-occurred.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CaptchaModule} from 'primeng/captcha';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    AboutMeComponent,
    SkillsComponent,
    PersonalProjectsComponent,
    ExperienceComponent,
    ContactMeComponent,
    HeaderComponent,
    ContactComponent,
    PageNotFoundComponent,
    FatalComponent,
    ErrorOccurredComponent,
    ThankYouPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    SharedModule,
    ScrollTopModule,
    CaptchaModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useFactory: getLang, deps: [TranslateService]}, MessageService],
  bootstrap: [AppComponent]
})


export class AppModule {
  
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export function getLang(translate: TranslateService){
  let path =  window.location.pathname.split('/')[1]
  if(path === 'fr' || path === 'ar' || path === 'en'){
    translate.use(path);
    (window as any)['_app_base'] = '/' + path;
  }else{
    const lang = navigator.language
    if(lang === 'fr' || lang === 'ar'){
      translate.setDefaultLang(lang);
      (window as any)["_app_base"] = '/' + lang;
    }else{
      translate.setDefaultLang('en');
      (window as any)["_app_base"] = '/'
    }
  }
  return (window as any)["_app_base"] || '/';
}