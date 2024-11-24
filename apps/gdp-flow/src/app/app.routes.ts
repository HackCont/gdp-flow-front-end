import { Route } from '@angular/router';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { TimelineComponent } from '../app/pages/timeline/timeline.component';
import { PdiComponent } from '../app/pages/pdi/pdi.component';
import { authGuard } from './guards/auth.guard';
import { ModoApresentacaoComponent } from '../app/pages/modo-apresentacao/modo-apresentacao.component';

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
        loadComponent: () => import('../app/pages/profile/profile.component').then(c => ProfileComponent),
        canActivate: [authGuard]
    },
    {
        path: 'timeline',
        loadComponent: () => import('../app/pages/timeline/timeline.component').then(c => TimelineComponent),
        canActivate: [authGuard]
    },
    {
        path: 'pdi',
        loadComponent: () => import('../app/pages/pdi/pdi.component').then(c => PdiComponent),
        canActivate: [authGuard]
    },
    {
        path: 'modo-apresentacao',
        loadComponent: () => import('../app/pages/modo-apresentacao/modo-apresentacao.component').then(c => ModoApresentacaoComponent),
        canActivate: [authGuard]
    }
];
