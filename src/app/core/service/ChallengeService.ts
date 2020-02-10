import {HttpService} from './HttpService';
import {Constants} from '../constants/Constans';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Challenge} from './models/challenge/Challenge';
import {ChallengeApplicationRequest} from './models/challenge/ChallengeApplicationRequest';
import {ChallengeApplicationViewModel} from './models/challenge/ChallengeApplicationViewModel';
import {RejectApplicationRequest} from './models/challenge/RejectApplicationRequest';
import {UserRateViewModel} from './models/user/UserRateViewModel';

export class ChallengeService extends HttpService {
  create(model: Challenge): Observable<any> {
    return this.http.post<any>(Constants.API_ENDPOINT + Constants.Challenge.PREFIX, model);
  }

  getAllAccepted(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(Constants.API_ENDPOINT + Constants.Challenge.PREFIX);
  }

  apply(id: number, model: ChallengeApplicationRequest): Observable<ChallengeApplicationRequest> {
    const formData = new FormData();
    Object.keys(model).forEach(k => formData.append(k, model[k]));

    return this.http.post<ChallengeApplicationRequest>(
      Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + id + '/' + Constants.Challenge.APPLICATIONS,
      formData);
  }

  getAllWaitingChallenges(): Observable<ChallengeApplicationViewModel[]> {
    return this.http.get<ChallengeApplicationViewModel[]>(Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + Constants.Challenge.WAITING);
  }

  acceptChallenge(id: number): Observable<Challenge> {
    return this.http.patch<Challenge>(Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + id + '/' + Constants.Challenge.ACCEPT, {});
  }

  rejectChallenge(id: number): Observable<Challenge> {
    return this.http.patch<Challenge>(Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + id + '/' + Constants.Challenge.REJECT, {});
  }

  getAllWaitingApplications(): Observable<ChallengeApplicationViewModel[]> {
    return this.http.get<ChallengeApplicationViewModel[]>
    (Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + Constants.Challenge.APPLICATIONS + '/' + Constants.Challenge.WAITING);
  }

  acceptApplication(id: number): Observable<ChallengeApplicationViewModel> {
    return this.http.patch<ChallengeApplicationViewModel>(
      Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + Constants.Challenge.APPLICATIONS + '/' + id + '/' + Constants.Challenge.ACCEPT, {});
  }

  rejectApplication(id: number, model: RejectApplicationRequest): Observable<ChallengeApplicationViewModel> {
    return this.http.patch<ChallengeApplicationViewModel>(
      Constants.API_ENDPOINT + Constants.Challenge.PREFIX + '/' + Constants.Challenge.APPLICATIONS + '/' + id + '/' + Constants.Challenge.REJECT, model);
  }

}
