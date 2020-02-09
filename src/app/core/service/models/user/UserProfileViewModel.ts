import {RoleInfoViewModel} from './RoleInfoViewModel';
import {SpherePreviewModel} from '../sphere/SpherePreviewModel';

export class UserProfileViewModel {
  constructor(
    public username: string = '',
    public name: string = '',
    public description: string = '',
    public avatarUrl: string = '',
    public points: number = 0,
    public role: RoleInfoViewModel = new RoleInfoViewModel(),
    public spheres: SpherePreviewModel[] = []
  ) {
  }
}
