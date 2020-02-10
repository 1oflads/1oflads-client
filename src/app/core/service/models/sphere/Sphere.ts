import {User} from '../user/User';
import {Group} from '../group/Group';

export class Sphere {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public users: User[] = [],
    public groups: Group[] = []
  ) {

  }

}
