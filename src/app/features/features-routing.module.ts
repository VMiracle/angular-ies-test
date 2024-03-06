import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { routes } from './features-routing.routes'

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
