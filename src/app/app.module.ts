import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GrantComponent } from './components/grant/grant.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RevokeComponent } from './components/revoke/revoke.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,LoginComponent,GrantComponent,RevokeComponent,NavigationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
