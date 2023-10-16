export class PayBackPlan{

    periodicity: String ;
    paybackAmount: number ;
    interest: number ;
    currency: string ;

   

    constructor(periodicity: String,paybackAmount: number,interest: number,currency: string){
        this.periodicity=periodicity;
        this.interest=interest;
        this.currency=currency;
        this.paybackAmount=paybackAmount;
    }

}