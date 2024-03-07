import { Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { ActiveSessionGuard } from './guards/active-session.guard'
import { InactiveSessionGuard } from './guards/inactive-session.guard'

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [InactiveSessionGuard]
  },
  {
    path: 'app',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    canActivate: [ActiveSessionGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]
