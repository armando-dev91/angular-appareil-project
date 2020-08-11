import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilListComponent } from './appareil-list/appareil-list.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AppareilService } from './service/appareil.service';
import { AuthGaurdService } from './security/auth-gaurd.service';
import { AppareilNewComponent } from './appareil-new/appareil-new.component';
import { FourOfFourComponent } from './four-of-four/four-of-four.component';

const routes: Routes = [
  { path: 'appareil-list', canActivate: [AuthGaurdService], component: AppareilListComponent },
  { path: 'appareil-new', canActivate: [AuthGaurdService], component: AppareilNewComponent },
  { path: 'connexion', component: AuthComponent },
  { path: '', canActivate: [AuthGaurdService], component: AppareilListComponent },
  { path: '**', component: FourOfFourComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilListComponent,
    AppareilComponent,
    AuthComponent,
    AppareilNewComponent,
    FourOfFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
