import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userData = new UserDTO('', '', '', '', '');

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(form: any, formData: any) {
    this.registerUser(formData);
    form.reset();
  }

  registerUser(user: UserDTO) {
    this.userService.addUser(user).subscribe();
  }
}