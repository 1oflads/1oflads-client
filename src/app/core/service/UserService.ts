import {UserRegisterRequest} from './models/user/UserRegisterRequest';
import {HttpService} from './HttpService';
import {Constants} from '../constants/Constans';
import {UserProfileEditRequest} from './models/user/UserProfileEditRequest';
import {Observable} from 'rxjs';
import {UserProfileViewModel} from './models/user/UserProfileViewModel';
import {RoleInfoViewModel} from './models/user/RoleInfoViewModel';
import {ChallengeApplicationViewModel} from './models/challenge/ChallengeApplicationViewModel';
import {UserRateViewModel} from './models/user/UserRateViewModel';

export class UserService extends HttpService {
  public register(model: UserRegisterRequest): Observable<UserProfileViewModel> {
    return this.http.post<UserProfileViewModel>(Constants.API_ENDPOINT + Constants.User.PREFIX, model);
  }

  public profile(): Observable<UserProfileViewModel> {
    return this.http.get<UserProfileViewModel>(Constants.API_ENDPOINT + Constants.User.PREFIX + '/' + Constants.User.ME);
  }

  public roles(): Observable<RoleInfoViewModel[]> {
    return this.http.get<RoleInfoViewModel[]>(Constants.API_ENDPOINT + Constants.Role.PREFIX);
  }

  public edit(model: UserProfileEditRequest): Observable<UserProfileViewModel> {
    const formData = new FormData();
    Object.keys(model).forEach(k => formData.append(k, model[k]));

    return this.http.patch<UserProfileViewModel>(Constants.API_ENDPOINT + Constants.User.PREFIX + '/' + Constants.User.ME, formData);
  }

  public challenges(id, status): Observable<ChallengeApplicationViewModel[]> {
    return this.http.get<ChallengeApplicationViewModel[]>(Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + Constants.Challenge.APPLICATIONS + '/' + id + '/' + status);
  }

  rating(): Observable<UserRateViewModel[]> {
    return this.http.get<UserRateViewModel[]>(Constants.API_ENDPOINT + Constants.User.PREFIX + '/' + Constants.User.RATING);
  }
}
