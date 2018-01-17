import { Component } from '@angular/core';
import { Test } from '@core/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  i = JSON.parse(sessionStorage.getItem('i') || '0');

  increment() {
    this.i++;
    sessionStorage.setItem('i', this.i);
  }
}
