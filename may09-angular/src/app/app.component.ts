import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public value = 11;
  public colors = ['red', 'salmon', 'orange','magenta', 'yellow', 'green', 'blue', 'indigo', 'violet'];
}
