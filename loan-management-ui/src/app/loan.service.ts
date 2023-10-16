
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PayBackPlan } from "./PayBackPlan";
import { Observable } from "rxjs";
import { Loan } from './Loan';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoanService {

    private appBaseUrl: string;
    private calculateLoanUrl: string;

    constructor(private http: HttpClient){
            this.appBaseUrl = 'http://localhost:8002';
            this.calculateLoanUrl = '/loan-management/myLoanPlan';
    }

    public calculate(loan: Loan): Observable<PayBackPlan>{
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        const credentials = btoa("username" + ':' + "password");
        headers.set('Authorization', 'Basic ' + credentials);
        const params = {
            loanAmount: loan.loanAmount,
            payBackDurationInYears: loan.payBackTimeInYears,
            loanType: loan.loanType
          };
        return this.http.get<PayBackPlan>(this.appBaseUrl+this.calculateLoanUrl, {headers, params});
    }

}