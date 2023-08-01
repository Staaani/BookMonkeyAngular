import { Component } from '@angular/core';
import {AuthService} from "./shared/auth.service";

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookMonkeyAngular';

  constructor(public auth: AuthService) {

  }
}
