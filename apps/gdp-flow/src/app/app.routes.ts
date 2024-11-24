import { Route } from '@angular/router';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { TimelineComponent } from '../app/pages/timeline/timeline.component';
import { PdiComponent } from '../app/pages/pdi/pdi.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
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
    },
    {
        path: 'pdi',
        loadComponent: () => import('../app/pages/pdi/pdi.component').then(c => PdiComponent)
    }
];
