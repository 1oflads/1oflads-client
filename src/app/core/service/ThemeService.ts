import {RoleTheme} from './models/user/RoleTheme';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  applyTheme(theme: RoleTheme) {
    document.body.style.setProperty('--main', theme.mainColor);
    document.body.style.setProperty('--dark', theme.darkColor);
    document.body.style.setProperty('--light', theme.lightColor);
  }

  applyDefaultTheme() {
    document.body.style.setProperty('--main', '#DC143C');
    document.body.style.setProperty('--dark', '#C01134');
    document.body.style.setProperty('--light', '#FBE4E9');
  }
}
