import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
})
export class ErrorPageComponent {
  errorCode?: string;

  constructor(private route: ActivatedRoute) {
    const code = this.route.snapshot.paramMap.get('code');
    this.errorCode = code || '404';
  }
}
