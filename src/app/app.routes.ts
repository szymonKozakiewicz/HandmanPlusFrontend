import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',loadComponent: () => import('./domains/landing/pages/landing/landing').then(m => m.Landing)
    },
    {
        path: 'sign-in',loadComponent: () => import('./core/pages/sign-in/sign-in').then(m => m.SignIn)
    },
    {
        path: 'create-account',loadComponent: () => import('./core/pages/create-account/create-account').then(m => m.CreateAccount)
    }
];
