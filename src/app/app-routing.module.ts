import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { GrantComponent } from './components/grant/grant.component';
import { RevokeComponent } from './components/revoke/revoke.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'grant', component: GrantComponent},
      {path: 'revoke', component: RevokeComponent}
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
