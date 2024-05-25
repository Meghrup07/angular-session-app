import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem("token");
    return token !== null;
  }

}
