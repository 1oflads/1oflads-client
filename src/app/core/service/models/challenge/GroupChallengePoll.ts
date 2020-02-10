import {Challenge} from './Challenge';
import {User} from '../user/User';

export class GroupChallengePoll {
  constructor(
    public id: number,
    public groupId: number,
    public challenge: Challenge,
    public user: User,
    public isAccepted: boolean
  ) {

  }

}
