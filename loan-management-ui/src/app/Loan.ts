export class Loan{

    loanAmount : number;
    payBackTimeInYears: number;
    loanType: string= 'HOUSING_LOAN';
    currency: string= 'EUR';

    constructor(loanAmount: number, payBackTimeInYears: number){
        this.loanAmount = loanAmount;
        this.payBackTimeInYears = payBackTimeInYears;
    }

}