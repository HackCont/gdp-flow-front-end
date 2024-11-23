import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('../app/pages/sign-up/sign-up.component').then(c => c.SignUpComponent)
    }
];
