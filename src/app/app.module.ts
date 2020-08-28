import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { TemplateModule } from './template/template.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationGuard } from './auth/shared/authentication.guard';
import { AuthenticationService } from './auth/shared/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [AuthenticationGuard, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
