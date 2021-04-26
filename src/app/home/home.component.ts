import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { AlertService } from 'ngx-alerts';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ApplicationList: any;
  StoredfirstName:any;
  storedWelcomeNote:any;
  Connecting:any;
  SharesToDate:any;
  fetchingShares:any;
  totalLoans:any;
  totalLoanBalance:any;
  imgPath:any;
  isDisconnected:any;
  Today:any;
  welcomeNote:any;
  localMemberId:any;
  isConnecting:any;
  hasActiveLoan:any;
  resData:any;
  resMaximumLoan:any;
  loanLimit:any;
  doughnutChart:any;
  respLoans:any;
  pay:any;
  memberNo:any;
  mobileWithCode:any;
  respData:any;
  STKmessage:any;
  surname:any;
  loanLimit2:any;
  RunningLoanBalance:any;
  counter:any;
  foundLoans:any;
  isLoanApplicationSuccess:any;
  storage:any;
  PayAmount:any;
  isEligible:any;
  ineligibilityReason:any;
  SavingsProducts:any;
  SavingsProduct:any;
  loanEligibility:any;
  memberId:any;
  fName:any;
  lName:any;
  oNames:any;
  natId:any;
  email:any;
  dob:any;
  cellNo:any;

  constructor( private service:UserService, public navCtrl: NgxNavigationWithDataComponent,private alert2:AlertService) {
    this.Connecting=true;
    this.SharesToDate=0.00;
    this.fetchingShares=false;
    //this.hasActiveLoan=false;
    this.totalLoans=0;
    this.totalLoanBalance=0.00;
    this.isDisconnected=false;
    this.isConnecting=true;
    this.totalLoans=0.00;
    this.pay=false;
    this.surname='';
    this.counter=0;
    this.foundLoans=false;
    this.fetchingShares=true;
    this.isLoanApplicationSuccess=false;
    this.storage=window.localStorage;
    this.isLoanApplicationSuccess=false;
  }
  ngOnInit(){

    

    this.fName=window.localStorage.getItem('firstName');
    this.oNames=window.localStorage.getItem('otherNames');
    this.lName=window.localStorage.getItem('lastName');
    this.email=window.localStorage.getItem('email');
    this.cellNo=window.localStorage.getItem('CellNo');
    this.dob=window.localStorage.getItem('DOB');
    this.natId=window.localStorage.getItem('natIdNo');

      this.getStorageMemberId();
      this.getFirstName();
      this.getMemberNo();
      this.getMobileWithCode();
      this.getSurname();

  
  this.service.getLoanType(1).subscribe((Response)=>{
    this.Connecting=false;
    console.log(Response);
    this.resData=Response;
    //this.resErrorDescription=this.resData["ErrorDescription"];
  if(this.resData["IsSuccess"]==true){
  this.resMaximumLoan=this.resData["MaximumAmount"];
  // this.Freq='month(s)';
  }
  },(error)=>{
    this.isDisconnected=true;
    this.isConnecting=false;
    return;
  });


  //Get No of loan Applications
  this.getLoanApplicationNo();
  ////////////////////////

}
getTime(){
  let date=new Date();
  let time=new Date().toISOString();
     this.Today=time;
  console.log(this.Today);
  if(date.getHours()<=10){
      this.welcomeNote='Good Morning, ';
  }else if (date.getHours()>=11&&date.getHours()<12){
    this.welcomeNote='Good Mid Morning, ';
  }else if (date.getHours()>=12&&date.getHours()<=18){
    this.welcomeNote='Good Afternoon, ';
  }else if (date.getHours()>=19&&date.getHours()<=24){
    this.welcomeNote='Good Evening, ';
  }
}
getMemberNo(){
  window.localStorage.getItem('MemberNo');
  console.log('Member No.:'+this.memberNo);
}
getMobileWithCode(){
  window.localStorage.getItem('mobileWithCode');
  console.log('Final Mobile'+this.mobileWithCode);
}
getSurname(){
  window.localStorage.getItem('lastName');
}
  getStorageMemberId(){
  this.localMemberId=window.localStorage.getItem('MemberId');
  if(this.localMemberId>0){
  this.service.getMemberActiveLoanSummary(this.localMemberId).subscribe((Response)=>{
    console.log(Response);
    this.respLoans=Response;
    this.totalLoanBalance=this.respLoans["totalloanbalance"];
    this.totalLoans=this.respLoans["totalloans"];
    this.foundLoans=true;
    //this.menuCtrl.enable(true);
    window.localStorage.setItem('totalLoanBalance',this.totalLoanBalance);
    if(this.totalLoanBalance>0){
      this.hasActiveLoan=true;
      this.loanLimit=0.00;
    }
  },(error)=>{
    this.isDisconnected=true;
    this.isConnecting=false;
    console.log('found error');
    return;
  });
     //get collection account balance
     this.service.getMemberShares(this.localMemberId).subscribe((Response)=>{
       this.fetchingShares=false;
       console.log(Response);
       this.SavingsProducts=Response;

    },(error)=>{
      this.isDisconnected=true;
      this.isConnecting=false;
    });
    this.getTime();
  }
}

  getFirstName(){
    this.StoredfirstName= window.localStorage.getItem('firstName')
  }
  LoanPage(){
    this.navCtrl.navigate('Loans');
  }
  MyLoansPage(){
    this.navCtrl.navigate('LoansHistory');
  }
  PayPage(){
    this.pay=true;
  }
  Pay(PayAmount){
    if(PayAmount>0&&PayAmount!=undefined&&PayAmount!=''){
      console.log('Mobile with code'+this.mobileWithCode);
      this.service.pay(PayAmount,'165C82B4-F39E-4686-9E04-E4B761BD842C','638160',this.mobileWithCode,this.memberNo,'20181029084100') .subscribe((Response)=>{
        console.log(Response);
        this.respData=Response;
        this.STKmessage=this.respData["Message"];
        if(this.STKmessage=="Success"){
          this.alert2.success('Success!MPESA STK was successfully pushed to '+this.mobileWithCode);
        }
      });
    }else{
      //Do nothing
    }
  }
  openMenu(){
    console.log('Pressed');
    //this.menuCtrl.enable(true);
    //this.menuCtrl.toggle();
  }
  Reload(){
    this.navCtrl.navigate('Home');
  }
  loanCalcPage(){
    /*this.navCtrl.push(LoanCalculatorPage,{
      animate:true,
      animation:'ios-transition',
      duration:1000
    });*/
  }

  toAccountPage(){
    this.navCtrl.navigate('Account');
  }
  
  AllUserApps(){
    this.navCtrl.navigate('UserLoanApplication');
  }

  getLoanApplicationNo(){
    this.service.getMemberPendingAppraisals(this.localMemberId).subscribe(Response => {
     
      this.ApplicationList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }


}