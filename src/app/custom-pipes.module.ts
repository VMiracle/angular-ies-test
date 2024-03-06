import { NgModule } from '@angular/core'

import { CharacterChangePipe } from './pipes/character-change.pipe'

@NgModule({
  declarations: [
    CharacterChangePipe
  ],
  exports: [
    CharacterChangePipe
  ]
})
export class CustomPipesModule { }
