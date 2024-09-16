import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { PrimeNgModule } from '../shared/prime-ng.module';

@NgModule({
  declarations: [
    BaseComponent,
    NavbarComponent,
    SideNavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, PrimeNgModule],
})
export class LayoutsModule {}
