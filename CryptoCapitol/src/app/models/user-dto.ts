export class UserDTO {
  public userName: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
