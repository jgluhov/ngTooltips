import { Component } from '@angular/core';
import { TestComponent } from './components/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public testComponent: TestComponent;

  constructor() {
    this.testComponent = TestComponent;
  }
}
