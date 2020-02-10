export class UserRegisterRequest {
  constructor(
    public username: string = '',
    public name: string = '',
    public password: string = '',
    public confirm: string = '') {
  }
}
