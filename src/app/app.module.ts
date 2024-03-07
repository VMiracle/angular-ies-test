import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
