import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UtilsService } from '../../services/utils/utils.service';
import { COOKIE_KEY_TOKEN } from '../../global/constants/key-cookies';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const utilsService = inject(UtilsService);
  const token = utilsService.getItemFromCookies(COOKIE_KEY_TOKEN);

  if (token) {
    const httpHeaders = req.headers.set('authorization', `Bearer ${token}`);
    const requestWithToken = req.clone({headers: httpHeaders});

    return next(requestWithToken);
  }
  
  return next(req);
};
