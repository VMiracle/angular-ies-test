import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'name-modal',
  templateUrl: 'name-modal.component.html',
  styleUrls: ['name-modal.component.css']
})
export class NameModalComponent implements OnInit {
  public form?: FormGroup

  constructor(public dialogRef: MatDialogRef<NameModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ["", []]
    })
  }

  public onExitClick(): void {
    this.dialogRef.close()
  }
}
