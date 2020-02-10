import {Challenge} from './Challenge';

export class ChallengeApplicationViewModel {
  constructor(
    public id: number = 0,
    public challenge: Challenge = null,
    public completedOn: Date = null,
    public proofDescription: string = '',
    public proofUrl: string = '',
  ) {

  }
}
