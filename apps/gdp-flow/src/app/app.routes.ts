import { Route } from '@angular/router';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { TimelineComponent } from '../app/pages/timeline/timeline.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'cadastro',
        loadComponent: () => import('../app/pages/sign-up/sign-up.component').then(c => c.SignUpComponent)
    },
    {
        path: 'perfil',
        loadComponent: () => import('../app/pages/profile/profile.component').then(c => ProfileComponent)
    },
    {
        path: 'timeline',
        loadComponent: () => import('../app/pages/timeline/timeline.component').then(c => TimelineComponent)
    }
];
