import {AfterViewInit, Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ThemeService} from './core/service/ThemeService';
import {AuthenticationService} from './core/service/AuthenticationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'oneoflads-client';

  constructor(
    private authenticationService: AuthenticationService,
    private themeService: ThemeService
  ) {

  }

  ngAfterViewInit(): void {
    this.authenticationService.isAuthenticated()
      && this.themeService.applyTheme(this.authenticationService.getTheme());
  }
}
