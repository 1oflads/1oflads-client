export class UserProfileEditRequest {
  constructor(
    public name: string = '',
    public password: string = '',
    public confirm: string = '',
    public description: string = '',
    public roleId: number = 0,
    public avatar: File = null
  ) {
  }
}
