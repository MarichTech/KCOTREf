import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  membershareId:any;
    sharetransactions:any
  respData:any;
  Amount:any;
sharetodate:any;
response:any;
LoanAmount:any;
Balance:any;
StartDate:any;
respDataHistory:any;
connecting:any;
noRepayments:any;
loanId:any;
disconnected:any;
pay:any;
mobileWithCode:any;
STKmessage:any;
memberNo:any;
showAlert:any;
alertMessage:any;
PayAmount:any;
isDisconnected:any;
  constructor(private navCtrl:NgxNavigationWithDataComponent,private lenderService:UserService) {
    this.showAlert=false;
    this.isDisconnected=false;
    this.alertMessage="";
    this.connecting=true;
    this.disconnected=false;
    this.Balance=this.navCtrl.get('Balance');
    this.LoanAmount=this.navCtrl.get('LoanAmount');
    this.StartDate=this.navCtrl.get('StartDate');
    this.noRepayments=false;
    this.loanId=this.navCtrl.get('loanId');
    console.log(this.navCtrl.get('loanId'));
    this.pay=false;
   }

  ngOnInit(): void {
    this.getMobileWithCode();
      this.getMemberNo();
      this.lenderService.getLoanRepayments(this.loanId).subscribe((Response)=>{
        console.log(this.respDataHistory);
        this.respDataHistory=Response;
        this.connecting=false;
        if(this.respDataHistory.length==0){
            this.noRepayments=true;
        }
    },(error)=>{
      this.disconnected=true;
      this.connecting=false;
    });
  }
    getMobileWithCode(){
      this.mobileWithCode=window.localStorage.getItem('mobileWithCode');
   }
   getMemberNo(){
     this.memberNo=window.localStorage.getItem('MemberNo');
   }
   Pay(){
    this.pay=true;
   console.log(this.pay);
  }
  Process(PayAmount){
   if(PayAmount>0&&PayAmount!=undefined&&PayAmount!=''){
     console.log('Mobile with code'+this.mobileWithCode);
     this.lenderService.pay(PayAmount,'165C82B4-F39E-4686-9E04-E4B761BD842C','638160',this.mobileWithCode,this.memberNo,'20181029084100') .subscribe((Response)=>{
       console.log(Response);
       this.respData=Response;
       this.STKmessage=this.respData["Message"];
       if(this.STKmessage=="Success"){
         this.showAlert=true;
         this.alertMessage='Success! MPESA STK was successfully pushed to '+this.mobileWithCode;
       }
     });
   }else{
     //Do nothing
   }
 }
 Reload(){
   this.navCtrl.navigate('Transaction');
 }
}
