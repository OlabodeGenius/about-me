import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent],
  template: `<app-about></app-about>`
})
export class AppComponent {
  total = 0;
  onLiked(n: number) { this.total = n; }
}
