import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

import { ConversionsComponent } from './conversions/conversions.component'
import { DateCalcComponent } from './date-calc/date-calc.component'
import { UserFormComponent } from './user-form/user-form.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { FeaturesRoutingModule } from './features-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    MatButtonModule
  ],
  declarations: [
    ConversionsComponent,
    DateCalcComponent,
    UserFormComponent,
    WelcomeComponent
  ]
})
export class FeaturesModule { }
