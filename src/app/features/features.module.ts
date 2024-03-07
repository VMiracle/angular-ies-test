import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { CustomPipesModule } from '../custom-pipes.module'
import { ConversionsComponent } from './conversions/conversions.component'
import { DateCalcComponent } from './date-calc/date-calc.component'
import { FeaturesRoutingModule } from './features-routing.module'
import { NameModalComponent } from './name-modal/name-modal.component'
import { UserFormComponent } from './user-form/user-form.component'
import { WelcomeComponent } from './welcome/welcome.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
    CustomPipesModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  declarations: [
    ConversionsComponent,
    DateCalcComponent,
    NameModalComponent,
    UserFormComponent,
    WelcomeComponent
  ],
  providers: [
    MatDatepickerModule
  ],
  entryComponents: [
    NameModalComponent
  ]
})
export class FeaturesModule { }
