import {RoleInfoViewModel} from './RoleInfoViewModel';

export class UserProfileViewModel {
  constructor(
    public username: string = '',
    public name: string = '',
    public description: string = '',
    public avatarUrl: string = '',
    public points: number = 0,
    public role: RoleInfoViewModel = new RoleInfoViewModel()
  ) {
  }
}
