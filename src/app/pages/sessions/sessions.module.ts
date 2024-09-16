import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: 'error/:code',
    component: ErrorPageComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, ErrorPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SessionsModule {}
