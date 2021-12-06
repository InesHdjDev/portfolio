import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorOccurredComponent } from './error-occurred/error-occurred.component';
import { FatalComponent } from './fatal/fatal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: HomePageComponent, pathMatch: 'full' },
  { path: "contact", component: ContactComponent, pathMatch: 'full' },

  { path: "oops", component: ErrorOccurredComponent },
  { path: "fatal", component: FatalComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
