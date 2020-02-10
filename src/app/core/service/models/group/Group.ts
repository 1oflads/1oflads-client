import {User} from '../user/User';
import {Sphere} from '../sphere/Sphere';
import {GroupCalendar} from './GroupCalendar';

export class Group {
  constructor(
    public id: number,
    public name: string,
    public avatarUrl: string,
    public description: string,
    public backgroundColor: string,
    public backgroundUrl: string,
    public innerBackgroundColor: string,
    public fontColor: string,
    public users: User[],
    public sphere: Sphere,
    public calendar: GroupCalendar[],
  ) {

  }
}
