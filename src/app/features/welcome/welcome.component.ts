import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { NameModalComponent } from '../name-modal/name-modal.component'

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
  name?: string

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(NameModalComponent, {
      width: '250px'
    })

    dialogRef.afterClosed().subscribe(result => {
      // Must check if the form value is returned
      if (result === undefined || result === null)
        return

      // Must check if name is among the form fields
      if (result.name === "" || result.name === undefined || result.name === null)
        return

      this.name = result.name
    })
  }
}
