import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Globals } from '../../models/globals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editProfile: boolean = false;
  userService: UserService;

  constructor(userService: UserService, globals: Globals) {
    this.userService = userService;
  }

  ngOnInit(): void {}

  onToggle() {
    this.editProfile = !this.editProfile;
  }
}
