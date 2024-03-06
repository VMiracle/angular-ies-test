import { Routes } from '@angular/router'

import { WelcomeComponent } from './welcome/welcome.component'
import { ConversionsComponent } from './conversions/conversions.component'
import { DateCalcComponent } from './date-calc/date-calc.component'
import { UserFormComponent } from './user-form/user-form.component'

export const routes: Routes = [
  {
    path: 'conversions',
    component: ConversionsComponent
  },
  {
    path: 'date',
    component: DateCalcComponent
  },
  {
    path: 'form',
    component: UserFormComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]
