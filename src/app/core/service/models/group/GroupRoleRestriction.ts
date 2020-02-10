import {Role} from '../user/Role';

export class GroupRoleRestriction {
  constructor(
    public id: number = 0,
    public eventType: number = 0,
    public role: Role = new Role()
  ) {

  }

}
