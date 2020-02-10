import {Group} from './Group';
import {User} from '../user/User';

export class GroupCalendar {
  constructor(
    public id: number,
    public from: Date,
    public to: Date,
    public group: Group,
    public eventType: number,
    public createdBy: User
  ) {

  }
}
