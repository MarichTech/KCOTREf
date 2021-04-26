import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-loans-history',
  templateUrl: './loans-history.component.html',
  styleUrls: ['./loans-history.component.css']
})
export class LoansHistoryComponent implements OnInit {
  localMemberId:any;
  respLoans:any;
  respLoanAmount:any;
  respLoanApplicationDate:any;
  respLoanBalance:any;
  respLoanEffectDate:any;
  respLoanId:any;
  i:any;
  noLoans:any;
  loansFound:any;
  isConnecting:any;
  isDisconnected:any;
  isConnectingHistory:any;
  respDataHistory:any;
  noRepayments:any;
  isDisconnectedHistory:any;
  LoanAmount:any;
  StartDate:any;
  Balance:any;
  StoredfirstName:any;
  surname:any;
  message:any;
  isClosedLoans:any;
  isActiveLoans:any;
  isAllLoans:any;
  subTitle:any;
  constructor( private navCtrl:NgxNavigationWithDataComponent,private lenderService:UserService) { 
    this.isConnecting=true;
    this.isConnectingHistory=false;
  }

  ngOnInit(): void {
    this.getStorageMemberId();
  }
  getStorageMemberId(){
    this.localMemberId=window.localStorage.getItem('MemberId');
    console.log('local Member Id='+this.localMemberId);
    this.ActiveLoans();
}
AllLoans(){
  this.respLoans=undefined;
    if (this.localMemberId>0){
      this.isConnecting=true;
      this.isAllLoans=true;
      this.isClosedLoans=false;
      this.isActiveLoans=false;
      this.lenderService.getMemberLoansHistoryViaMemberId(this.localMemberId).subscribe((Response)=>{
          console.log(Response);
          this.respLoans=Response;
          this.isConnecting=false;
          this.loansFound=this.respLoans.length;
          this.i=0;
          this.noLoans=false;
          console.log('this.i ='+this.i);
      
          if (this.loansFound==0){
            this.noLoans=true;
            this.subTitle='No Loans were found';
            this.message='You are yet to apply for loans from us.';
          }
      },(error)=>{
        this.isConnecting=false;
        this.isDisconnected=true;
      });
    }
  }
    ActiveLoans(){
      this.respLoans=undefined;
      this.isConnecting=true;
      this.isAllLoans=false;
      this.isClosedLoans=false;
      this.isActiveLoans=true;
      this.lenderService.getMemberRunningLoans(this.localMemberId).subscribe((Response)=>{
        console.log(Response);
        console.log('Active Loans');
        this.respLoans=Response;
        this.isConnecting=false;
        this.loansFound=this.respLoans.length;
        this.noLoans=false;
        this.i=0;
        console.log('this.i ='+this.i);

        if (this.loansFound==0){
          this.noLoans=true;
          this.subTitle='No Active Loans were found';
          this.message='You do not have active Loans';
        }
      },(error)=>{
      this.isConnecting=false;
      this.isDisconnected=true;
      });
    }
    ClosedLoans(){
      this.respLoans=undefined;
      this.isConnecting=true;
      this.isAllLoans=false;
      this.isClosedLoans=true;
      this.isActiveLoans=false;
      this.lenderService.getMemberClosedLoans(this.localMemberId).subscribe((Response)=>{
        console.log(Response);
        console.log('Closed Loans');
        this.respLoans=Response;
        this.isConnecting=false;
        this.loansFound=this.respLoans.length;
        this.i=0;
        this.noLoans=false;
        console.log('this.i ='+this.i);

        if (this.loansFound==0){
          this.noLoans=true;
          this.subTitle='No Cleared Loans were found';
          this.message='You do not have cleared Loans yet';
        }
      },(error)=>{
      this.isConnecting=false;
      this.isDisconnected=true;
      });
    }
historyDetails(loanId,LoanAmount,StartDate,Balance){
  this.LoanAmount=LoanAmount;
  this.StartDate=StartDate;
  this.Balance=Balance;
  console.log('selected LoanId'+loanId);
  this.navCtrl.navigate('Transaction',{
    loanId:loanId,
    LoanAmount:this.LoanAmount,
    StartDate:this.StartDate,
    Balance:this.Balance
  });
}
Reload(){
  this.navCtrl.navigate('LoansHistory');
}

}
