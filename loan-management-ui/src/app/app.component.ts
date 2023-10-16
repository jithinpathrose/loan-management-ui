import { Component, OnInit } from '@angular/core';
import { LoanService } from './loan.service';
import { Loan } from './Loan';
import { PayBackPlan } from './PayBackPlan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'loan-ui';
  loan: Loan;
  payBackPlan: PayBackPlan;
  showForm: boolean = false;

  constructor(private loanService: LoanService){
    this.loan = new Loan(0, 0);
    this.payBackPlan = new PayBackPlan('',0,0,'');

  }
  
  ngOnInit(): void {
    
  }

  public calculateLoan() : void{
    console.log("called component "+ this.loan.loanAmount);
    this.loanService.calculate(this.loan).subscribe(data => {
        this.payBackPlan = data;
        this.showForm = true;
    }, error => {
      console.error("An error occurred while calculating loan:", error.message);
      window.alert("Sorry! Loan Calculation Failed. "+error.message);
    });
  }
}
