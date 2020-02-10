import {GroupChallengePoll} from '../challenge/GroupChallengePoll';
import {Group} from '../group/Group';
import {Sphere} from '../sphere/Sphere';
import {UserRoleHistory} from './UserRoleHistory';
import {Role} from './Role';
import {GroupCalendar} from '../group/GroupCalendar';

export class User {
  constructor(
    public name: string = '',
    public username: string = '',
    public password: string = '',
    public isAdmin: boolean = false,
    public polls: GroupChallengePoll[] = [],
    public groups: Group[] = [],
    public spheres: Sphere[] = [],
    public roleHistory: UserRoleHistory[] = [],
    public role: Role = null,
    public description: string = '',
    public avatarUrl: string = '',
    public createdGroupCalendarSlots: GroupCalendar[] = []
  ) {

  }

}
