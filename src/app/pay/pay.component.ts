import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  touched:any;
  cellNo:any;
  memberNo:any;
  mobileWithCode:any;
  respData:any;
  STKmessage:any;
  storedMemberId:any;
  RunningLoanBalance:any;
  fetchingLoans:any;
  totalLoanBalance:any;
  PayAmount:any;

  constructor(private lenderService:UserService, private alertCtrl:AlertService) { 
    this.fetchingLoans=true;
    this.touched=false;
    this.PayAmount=0.00;
  }

  ngOnInit(): void {
      this.getMemberNo();
      this.getMobileWithCode();
      this.getTotalLoanBalance();
  }
  getTotalLoanBalance(){
    this.totalLoanBalance=window.localStorage.getItem('totalLoanBalance');
  }
  getMemberNo(){
    this.memberNo=window.localStorage.getItem('MemberNo');
    console.log('Member No.:'+this.memberNo);
  }
  getMobileWithCode(){
    this.mobileWithCode=window.localStorage.getItem('mobileWithCode');
    console.log('Final Mobile'+this.mobileWithCode);
  }
  Pay(Amount){
    this.touched=true;
    if(Amount>0&&Amount!=undefined&&Amount!=''){
      console.log('Mobile with code'+this.mobileWithCode);
      this.lenderService.pay(Amount,'165C82B4-F39E-4686-9E04-E4B761BD842C','638160',this.mobileWithCode,this.memberNo,'20201029084100') .subscribe((Response)=>{
        console.log(Response);
        this.respData=Response;
        this.STKmessage=this.respData["Message"];
        if(this.STKmessage=="Success"){
          this.alertCtrl.success('Success! MPESA STK was pushed to '+this.mobileWithCode+'.');
        }
      });
    }else{
      //Do nothing
    }
  }

}
