import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { UtilsService } from '../services/utils/utils.service';
import { COOKIE_KEY_TOKEN } from '../global/constants/key-cookies';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const utilsService = inject(UtilsService);
  const router = inject(Router);

  if (utilsService.getItemFromCookies(COOKIE_KEY_TOKEN)) {
    return true
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
