import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newUser = {
      userName: this.userName,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    this.registerUser(newUser);
    this.userName = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  registerUser(user: UserDTO) {
    this.userService.addUser(user).subscribe();
  }
}
