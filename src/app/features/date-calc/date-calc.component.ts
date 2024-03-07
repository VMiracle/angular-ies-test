import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'date-calc',
  templateUrl: 'date-calc.component.html',
  styleUrls: ['date-calc.component.css']
})
export class DateCalcComponent implements OnInit {
  form?: FormGroup
  calculatedDate?: Date

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      date: [null, [Validators.required]],
      unitType: [null, Validators.required],
      units: [null, [Validators.required]]
    })
  }

  public calculateDate(): void {
    if (this.form === undefined || this.form === null)
      return

    if (!this.form.valid)
      return

    switch (this.form.value.unitType) {
      case 1: this.calculatedDate = this.addDays(this.form.value.date, this.form.value.units); break;
      case 2: this.calculatedDate = this.addMonths(this.form.value.date, this.form.value.units); break;
      case 3: this.calculatedDate = this.addYears(this.form.value.date, this.form.value.units); break;
    }
  }

  public addDays(date: Date, days: number): Date {
    let calcDate = new Date(date)

    calcDate.setDate(date.getDate() + days)

    return calcDate
  }

  public addMonths(date: Date, months: number): Date {
    let calcDate = new Date(date)

    calcDate.setMonth(date.getMonth() + months)

    return calcDate
  }

  public addYears(date: Date, years: number): Date {
    let calcDate = new Date(date)

    calcDate.setFullYear(date.getFullYear() + years)

    return calcDate
  }
}
