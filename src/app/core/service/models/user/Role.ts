import {RoleTheme} from './RoleTheme';
import {UserRoleHistory} from './UserRoleHistory';
import {GroupRoleRestriction} from '../group/GroupRoleRestriction';
import {User} from './User';
export class Role {

  constructor(
    public id: number = null,
    public name: string = '',
    public theme: RoleTheme = null,
    public roleHistory: UserRoleHistory[] = [],
    public participants: User[] = [],
    public groupRestrictions: GroupRoleRestriction[] = []
  ) {

  }


}

