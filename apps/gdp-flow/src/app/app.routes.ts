import { Route } from '@angular/router';
import { ProfileComponent } from '../app/pages/profile/profile.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('../app/pages/sign-up/sign-up.component').then(c => c.SignUpComponent)
    },
    {
        path: 'perfil',
        loadComponent: () => import('../app/pages/profile/profile.component').then(c => ProfileComponent)
    }
];
