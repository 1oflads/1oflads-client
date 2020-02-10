import {HttpService} from './HttpService';
import {Constants} from '../constants/Constans';
import {UserLoginRequest} from './models/authentication/UserLoginRequest';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ThemeService} from './ThemeService';
import {RoleTheme} from './models/user/RoleTheme';

export class AuthenticationService extends HttpService {
  constructor(
    private router: Router,
    protected http: HttpClient,
    private themeService: ThemeService
  ) {
    super(http);
  }

  login(model: UserLoginRequest) {
    return this.http.post(Constants.API_ENDPOINT + Constants.Authentication.LOGIN, model);
  }

  saveLoginData(token) {
    const helperService = new JwtHelperService();

    const decodedToken = helperService.decodeToken(token);

    localStorage.setItem(Constants.Authentication.ID, decodedToken.sub);
    localStorage.setItem(Constants.Authentication.ROLE, decodedToken.role);
    localStorage.setItem(Constants.Authentication.TOKEN, token);
    localStorage.setItem(Constants.Authentication.THEME, JSON.stringify(decodedToken.theme));

    if (!decodedToken.isAdmin) {
      decodedToken.isAdmin = false;
    }

    localStorage.setItem(Constants.Authentication.ADMIN, decodedToken.isAdmin);

    console.log(decodedToken);

    if (!this.isCompletedProfile()) {
      this.router.navigate(['/user/profile/edit']);
    } else {
      this.themeService.applyTheme(this.getTheme());
      this.router.navigate(['/']);
    }
  }

  isCompletedProfile() {
    return localStorage.getItem(Constants.Authentication.ROLE).length;
  }

  isAuthenticated() {
    return localStorage.getItem(Constants.Authentication.ID);
  }

  isAdmin() {
    return JSON.parse(localStorage.getItem(Constants.Authentication.ADMIN));
  }

  isProfileOwner(id) {
    return this.getId() === id;
  }

  setRole(role: string) {
    return localStorage.setItem(Constants.Authentication.ROLE, role);
  }

  getToken() {
    return localStorage.getItem(Constants.Authentication.TOKEN);
  }

  getId(): number {
    return +localStorage.getItem(Constants.Authentication.ID);
  }

  getTheme(): RoleTheme {
    return JSON.parse(localStorage.getItem(Constants.Authentication.THEME));
  }

  isGuest() {
    return !localStorage.getItem(Constants.Authentication.ID);
  }

  logout() {
    this.themeService.applyDefaultTheme();

    return localStorage.clear();
  }

  // getToken(): string {
  //   return localStorage.getItem(Constants.LocalStorage.TOKEN);
  // }
  //
  // checkTokenExpiration(): void {
  //   const helperService = new JwtHelperService();
  //   const token = this.getToken();
  //
  //   if (token && helperService.isTokenExpired(token)) {
  //     this.logout();
  //   }
  // }
  //
  // getId(): string {
  //   return localStorage.getItem(Constants.LocalStorage.USER_ID);
  // }
  //
  // logout(): void {
  //   return localStorage.clear();
  // }
  //
  // isAuthenticated(): boolean {
  //   return localStorage.getItem(Constants.LocalStorage.TOKEN) !== null;
  // }
  //
  // isAdmin(): boolean {
  //   return localStorage.getItem(Constants.LocalStorage.ROLES)
  //     && localStorage.getItem(Constants.LocalStorage.ROLES).includes(Constants.Role.ROLE_ADMIN);

}
