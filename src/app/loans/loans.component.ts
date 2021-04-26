import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AlertService } from 'ngx-alerts';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  Terms:string;
  resData:any;
  resErrorDescription:any;
  resFrequency:any;
  resInterestRate:any;
  resIsSuccess:any;
  resLoanTypeId:any;
  resMaximumAmount:any;
  resMinimumAmount:any;
  resPeriod:any;
  principal:any;
  totalOcharges:any;
  totalLoan:any;
  installment:any;
  principal2:any;
  resMemberId:any;
  resMessage:any;
  cellNo:any;
  resLoanMemberId:any;
  respData:any;
  respIsSuccess:any;
  validPeriod:any;
  interest:any;
  Freq:any;
  LoanProducts:any;
  applicationDate:any;
  effectDate:any;
  endDate:any;
  instalment:any;
  touched:any;
  Period:any;
  showPreview:any;
  disconnected:any;
  netMessage:any;
  Connecting:any;
  storedMemberId:any;
  Loans:any;
  RunningLoanBalance:any;
  hasActiveLoan:any;
  generatingPaySchedule:any;
  loanlimit:any;
  respDataSchedule:any;
  StoredfirstName:any;
  surname:any;
  fetchingLoans:any;
  totalLoanBalance:any;
  mobileNo:any;
  isLoanApplicationSuccess:any;
  LoanAmount:any;
  IsAccepted:any;
  alertMessage:any;
  touchedF:any;
  isProcessingLoan:any;
  spinnerContent:any;

  constructor(private lenderService:UserService, private alertCtrl:AlertService,private navCtrl:NgxNavigationWithDataComponent,private spinner:NgxSpinnerService) { 
    this.Terms='Overview';
    this.validPeriod=0;
    this.showPreview=false;
    this.disconnected=false;
    this.netMessage="Please wait...";
    this.Connecting=true;
    this.Loans=0;
    this.RunningLoanBalance=0;
    this.hasActiveLoan=false;
    this.generatingPaySchedule=false;
    this.loanlimit=0.00;
    this.totalLoanBalance=0.00;
    this.LoanAmount=0.00;
    this.IsAccepted=false;
    this.alertMessage="";
    this.touchedF=false;
    this.isProcessingLoan=false;
    this.spinnerContent="";
  }

  ngOnInit(): void {

      this.getStoredMemberId();
      this.getTotalLoanBalance();
      this.getMobileNo();
      this.getNewLoanGoAhead();
  }
  getMobileNo(){
    this.mobileNo=window.localStorage.getItem('mobileWithCode');
}
  getTotalLoanBalance(){
    this.totalLoanBalance=window.localStorage.getItem('totalLoanBalance');
    if(this.totalLoanBalance>0){
      this.hasActiveLoan=true;
    }
  }
  getNewLoanGoAhead(){
    this.isLoanApplicationSuccess=window.localStorage.getItem('isLoanApplicationSuccess');
    console.log('isApplicationSuccess='+this.isLoanApplicationSuccess);
  }
  getStoredMemberId(){
    this.storedMemberId=window.localStorage.getItem('MemberId');
    console.log('MemberId'+this.storedMemberId);
    this.getLoanLimit(this.storedMemberId);
  }
  getLoanLimit(memberId){
      this.lenderService.getMemberLoanLimit(memberId,1).subscribe((Response)=>{
        console.log(Response);
        this.loanlimit=Response["loanlimitamount"];
      },(error)=>{
        this.Connecting=false;
      this.disconnected=true;
      return;
      });
      this.fetchData(1);
  }
  fetchData(loanTypeId){
      this.lenderService.getLoanType(loanTypeId).subscribe((Response)=>{
        this.Connecting=false;
        console.log(Response);
        this.resData=Response;
        this.resErrorDescription=this.resData["ErrorDescription"];
      if(this.resData["IsSuccess"]==true){
      this.resFrequency=this.resData["Frequency"];
      this.resInterestRate=this.resData["InterestRate"];
      this.resMaximumAmount=this.resData["MaximumAmount"];
      this.resMinimumAmount=this.resData["MinimumAmount"];
      this.resPeriod=this.resData["Period"];
      this.Period=this.resPeriod;//default range value
      console.log(this.Freq);
      if(this.resFrequency=='Weekly'||this.resFrequency=='Bi-Weekly'){
        this.Freq='week(s)';
      }else if(this.resFrequency=='Monthly'){
        this.Freq='month(s)';
      }
      if (this.resFrequency=='Bi-Weekly'){
        console.log('here');
        this.Freq='Week(s)';
        this.Period=2*this.Period;
        this.resPeriod=2*this.resPeriod;
      }
      // this.Freq='month(s)';
      }
      this.fetchingLoans=false;
      console.log(this.Freq);
    },(error)=>{
      this.Connecting=false;
      this.disconnected=true;
      return;
      });
}
CheckTerms(loanTypeId, LoanAmount,Period){
  this.touched=true;
if (Period==0||Period==undefined){
      this.alertCtrl.danger('Period is required. Slide the knob to select the period you wish');
      return;
  }else if (LoanAmount==0||LoanAmount==undefined||LoanAmount>this.loanlimit||LoanAmount<this.resMinimumAmount){
    return;
  }
  if(this.resFrequency=='Bi-Weekly'){
    Period=Period/2;
  }
  this.generatingPaySchedule=true;
  this.showPreview=true;
  console.log("at get terms");
  if(LoanAmount&&LoanAmount>0&&LoanAmount<=this.resMaximumAmount&&LoanAmount>=this.resMinimumAmount&&Period&&Period>0){
    this.lenderService.getTerms(loanTypeId,LoanAmount,Period,true).subscribe((Response)=>{
      console.log(Response);
      this.generatingPaySchedule=false;
      this.resData=Response;
      this.applicationDate =this.resData['ApplicationDate'];
      this.effectDate=this.resData['EffectDate'];
      this.endDate=this.resData['EndDate'];
      this.instalment=this.resData['Installment'];
      this.interest=this.resData['InterestAmount'];
      this.totalLoan=this.resData['TotalLoan'];
      this.totalLoan= this.totalLoan.toFixed();
      this.principal=LoanAmount;
      this.resMemberId=window.localStorage.getItem('MemberId');
      this.cellNo=window.localStorage.getItem('CellNo');
    },(error)=>{
      this.Connecting=false;
      this.disconnected=true;
      this.generatingPaySchedule=false;
      return;
    });
    }
  }
  SubmitLoanApplication(IsAccepted){
    this.touchedF=true;
    if (IsAccepted!=true){
      this.alertMessage='Terms and Conditions.Please accept the loan terms and conditions to proceed. Click on the check-box.';
      console.log('Terms not accepted');
      return;
    }
    this.ConfirmedApplication();
  }
  ConfirmedApplication(){
    this.spinner.show();
    this.spinnerContent="Processing Loan Request...";
    this.lenderService.addCustLoan(this.resMemberId,1,this.Period,this.principal,this.instalment) .subscribe((Response)=>{
        this.respData=Response;
        this.isProcessingLoan=false;
        console.log(Response);
        this.resErrorDescription=this.respData['ErrorDescription'];
        this.respIsSuccess=this.respData['IsSuccess'];
        this.resMessage=this.respData['Message'];
        this.resLoanMemberId=this.respData['MemberId'];
        if (this.resErrorDescription=='The customer has another active loan'&&this.respIsSuccess==false){
          this.navCtrl.navigate('LoanResult',{
            status:'warning',
            subTitle:"Active Loan was found",
            message:'You have an active loan.Please clear and try again.'

          });
          return;
        }
        if (this.resMessage=='An error has occurred.'&&this.respIsSuccess==false){
          this.navCtrl.navigate('LoanResult',{
            status:'warning',
            subTitle:"An Error has occurred",
            message:'Request completed with errors.Please try again later.'

          });
          return;
        }
        if(this.resMessage=='The request is invalid'&&this.respIsSuccess==false){
              this.navCtrl.navigate('LoanResult',{
                status:'warning',
                subTitle:"An Error has occurred",
                message:'Request completed with errors.Please try again later.'
    
              });
              return;
        }
        if(this.resErrorDescription=='Your account is blocked,please contact administrator'&&this.respIsSuccess==false){
          this.navCtrl.navigate('LoanResult',{
            status:'warning',
            subTitle:"Your account is blocked",
            message:'Please contact system administrator for unblocking.'
          });
          return;
        }
        if (this.resErrorDescription=='The details could not be found'&&this.respIsSuccess==false){
          this.navCtrl.navigate('LoanResult',{
            status:'warning',
            subTitle:"An Error has occurred",
            message:'Request completed with errors.Please try again later.'
          });
          return;
        }
        if(this.resErrorDescription=='You have a pending loan that is being processed'&&this.respIsSuccess==false){
          this.navCtrl.navigate('LoanResult',{
            status:'warning',
            subTitle:"You have a pending application",
            message:'Please wait as your earlier request is processed.'

          });
          return;
        }
       
        if (this.respIsSuccess==true){
              this.navCtrl.navigate('LoanResult',{
                status:'success',
                subTitle:"Loan Request was sent successfully",
                message:'Your loan of '+this.principal+' will be deposited to '+this.mobileNo+' shortly.'
              });
        }
        if(this.resErrorDescription=='Already a defaulter'&&this.respIsSuccess==false){
          this.navCtrl.navigate('LoanResult',{
            status:'warning',
            subTitle:"Application Declined",
            message:'Sorry,we are unable extend credit to you at this time.Please check your account status later.'
          });
          return;
        }
    },(error)=>{
      this.isProcessingLoan=false;
      this.navCtrl.navigate('LoanResult',{
        status:'success',
        subTitle:"Loan Request was sent successfully",
        message:'Your loan of '+this.principal+' will be deposited to '+this.mobileNo+' shortly.'
      });
    });
  }
  Reload(){
    this.navCtrl.navigate('Loans');
  }
  TNCs(){
    //this.iab.create('http://62.12.115.223/TermsandConditions/GrootsSacco_Terms.pdf','_system',{
    //footer:"yes"
    //});
    //this.documentViewer.viewDocument(this.file.applicationDirectory+'www/assets/MkopoRadiTerms.pdf','application/pdf',options);
  }
  PrevCard(){
    this.showPreview=false;
  }
  LoanSchedule(LoanTypeId,LoanAmount,Period){
    this.touched=true;
    if (LoanAmount<=3000.00&&Period>1){
      this.resPeriod=1;
      console.log('resPeriod='+this.resPeriod);
      return;
    }
    if(LoanAmount&&LoanAmount>0&&LoanAmount<=this.resMaximumAmount&&LoanAmount>=this.resMinimumAmount&&LoanAmount<=this.loanlimit&&Period&&Period>0){
    this.generatingPaySchedule=true;
  this.lenderService.getTerms(LoanTypeId,LoanAmount,Period,false).subscribe((Response)=>{
    console.log('at loan schedule');
    console.log(Response);
    //this.generatingPaySchedule=false;
    this.respDataSchedule=Response;
    this.CheckTerms(LoanTypeId,LoanAmount,Period);
  },(error)=>{
    this.CheckTerms(LoanTypeId,LoanAmount,Period);
  });
  }
  }
  PayPage(){
    this.navCtrl.navigate('Pay');
  }
}
