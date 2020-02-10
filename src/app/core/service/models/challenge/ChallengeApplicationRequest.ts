export class ChallengeApplicationRequest {
  constructor(
    public proofDescription: string = '',
    public proof: File = null,
    public groupId: number = 0
  ) {

  }

}
