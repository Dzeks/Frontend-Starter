import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './domain/api.service';
import { UserDto } from './domain/api.types';

@Injectable({
  providedIn: 'root',
})
export class UserRoleGuard implements CanActivate {
  constructor(private apiService: ApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let currentUserId: number = parseInt(
      localStorage.getItem('currentUserId') || '2'
    );
    return this.apiService.getUser(currentUserId).then((user) => {
      if (state.url === '/') {
        this.router.navigate([this.getUserUrl(user)]);
        return false;
      }
      if (state.url !== this.getUserUrl(user)) {
        this.router.navigate([this.getUserUrl(user)]);
        return false;
      }
      return true;
    });
  }
  private getUserUrl(user: UserDto) {
    return user.role === 'ADMIN' ? '/admin' : '/shopping';
  }
}
