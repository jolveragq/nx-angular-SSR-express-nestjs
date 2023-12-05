import { Route } from '@angular/router';
import { RootComponent } from './pages/child/root.component';

export const appRoutes: Route[] = [
    {
     path: '',
     component: RootComponent
    },
   {
    path: 'child',
    loadComponent: () => import('./pages/child/child.component').then(c => c.ChildComponent)
   } 
];
