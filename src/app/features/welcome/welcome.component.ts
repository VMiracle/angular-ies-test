import { Component, OnDestroy } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { NameModalComponent } from '../name-modal/name-modal.component'
import { Subscription } from 'rxjs'

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnDestroy {
  name?: string
  dialogSubscription?: Subscription

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(NameModalComponent, {
      width: '250px'
    })

    dialogRef.afterClosed().subscribe(result => {
      // Si no tenemos un resultado válido, no hacemos nada adicional
      if (result === undefined || result === null)
        return

      // Si tenemos un resultado válido, verificamos si el nombre también lo es
      if (result.name === "" || result.name === undefined || result.name === null)
        return

      this.name = result.name
    })
  }

  public ngOnDestroy(): void {
    // Siempre se deben cerrar las suscripciones al momento de destruir el
    // componente
    this.dialogSubscription?.unsubscribe()
  }
}
