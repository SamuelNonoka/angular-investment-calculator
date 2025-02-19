import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestimentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestimentInput>()

  enteredInitialInvestment = signal('0')
  enteredAnnualInvestment = signal('0')
  enteredExpectedReturn = signal('5')
  enteredDuration = signal('10')

  onSubmit () {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredDuration(),
      annualInvestment: +this.enteredDuration()
    })
  }
}
