import {User} from './User';
import {Role} from './Role';

export class UserRoleHistory {
  constructor(
    public id: number = null,
    public user: User = null,
    public role: Role = null,
    public points: number = 0,
    public selectedOn: Date = null,
    public finishedOn: Date = null,
  ) {

  }


}
