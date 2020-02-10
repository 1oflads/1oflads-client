export class Challenge {
  constructor(
    public id: number = 0,
    public name: string = '',
    public challengeType: number = -1,
    public description: string = '',
    public points: number = 0,
    public startsOn: Date = null,
    public endsOn: Date = null,
  ) {

  }

}
