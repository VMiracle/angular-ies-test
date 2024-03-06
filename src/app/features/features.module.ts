import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

import { ConversionsComponent } from './conversions/conversions.component'
import { DateCalcComponent } from './date-calc/date-calc.component'
import { UserFormComponent } from './user-form/user-form.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { FeaturesRoutingModule } from './features-routing.module'
import { NameModalComponent } from './name-modal/name-modal.component'
import { CustomPipesModule } from '../custom-pipes.module'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    CustomPipesModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    ConversionsComponent,
    DateCalcComponent,
    NameModalComponent,
    UserFormComponent,
    WelcomeComponent
  ],
  entryComponents: [
    NameModalComponent
  ]
})
export class FeaturesModule { }
