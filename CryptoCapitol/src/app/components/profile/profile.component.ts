import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editProfile: boolean = false;
  userService: UserService;
  userData: User;

  constructor(userService: UserService) {
    this.userService = userService;
    this.userData = new User(
      this.userService.user!.userId,
      this.userService.user!.userName,
      this.userService.user!.firstName,
      this.userService.user!.lastName,
      this.userService.user!.email
    );
  }

  ngOnInit(): void {}

  onToggle() {
    this.editProfile = !this.editProfile;
    console.log(this.userService.user);
  }

  onSubmit(form: any, formData: any) {
    console.log('submitting...');
    console.log(formData);
    this.userService
      .updateUser(formData)
      .subscribe(() => this.userService.updateUserState(formData));
      this.editProfile = false;
  }
}
