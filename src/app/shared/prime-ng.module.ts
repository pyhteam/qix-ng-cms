import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';

const primeNgModules = [
  MenubarModule,
  BadgeModule,
  AvatarModule,
  InputTextModule,
  RippleModule,
  AvatarGroupModule,
  MegaMenuModule,
  ButtonModule,
  ToastModule,
  MenuModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...primeNgModules],
  exports: [...primeNgModules],
})
export class PrimeNgModule {}
