import {HttpService} from './HttpService';
import {Observable} from 'rxjs';
import {GroupPreviewModel} from './models/group/GroupPreviewModel';
import {Constants} from '../constants/Constans';
import {GroupViewModel} from './models/group/GroupViewModel';

export class GroupService extends HttpService {
  public getGroupsPreviews(): Observable<GroupPreviewModel[]> {
    return this.http.get<GroupPreviewModel[]>(Constants.API_ENDPOINT + Constants.Group.PREFIX);
  }

  public getGroupsDetails(groupId: number): Observable<GroupViewModel> {
    return this.http.get<GroupViewModel>(Constants.API_ENDPOINT + Constants.Group.PREFIX + '/' + groupId);
  }
}
