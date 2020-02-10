import {RoleInfoViewModel} from './RoleInfoViewModel';
import {SpherePreviewModel} from '../sphere/SpherePreviewModel';
import {GroupPreviewModel} from '../group/GroupPreviewModel';

export class UserProfileViewModel {
  constructor(
    public username: string = '',
    public name: string = '',
    public description: string = '',
    public avatarUrl: string = '',
    public points: number = 0,
    public role: RoleInfoViewModel = new RoleInfoViewModel(),
    public groups: GroupPreviewModel[] = [],
    public spheres: SpherePreviewModel[] = []
  ) {
  }
}
