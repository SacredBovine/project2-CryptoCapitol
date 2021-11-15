import { Inject, Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class NavAuthService implements CanActivate{

  constructor(private userService:UserService) { 
    
  }

  canGoToRoute(userService: UserService,id: string): boolean {
    console.log("logged in? ",this.userService.loggedInStatus);
    return userService.loggedInStatus;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //console.log(this.userService.user);
    return this.canGoToRoute(this.userService, route.params.id);
  }
}
