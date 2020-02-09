import {HttpService} from './HttpService';
import {Observable} from 'rxjs';
import {SpherePreviewModel} from './models/sphere/SpherePreviewModel';
import {Constants} from '../constants/Constans';

export class SphereService extends HttpService {
  public findSpheres(): Observable<SpherePreviewModel[]> {
    return this.http.get<SpherePreviewModel[]>(Constants.API_ENDPOINT + Constants.Sphere.PREFIX);
  }
}
