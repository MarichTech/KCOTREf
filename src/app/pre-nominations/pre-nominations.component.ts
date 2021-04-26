import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-pre-nominations',
  templateUrl: './pre-nominations.component.html',
  styleUrls: ['./pre-nominations.component.css']
})
export class PreNominationsComponent implements OnInit {
  storedMemberId:any;
  respLoans:any;
  connecting:any;
  disconnected:any;
  LoanId:any;
  LoanAmount:any;
  ApplicationDate:any;
  respData:any;
  noOfLoans:any;
  noOfNoms:any;
  start:any;
  next:any;

  constructor(private navCtrl:NgxNavigationWithDataComponent,private service:UserService) {
    this.start=true;
   }

  ngOnInit(): void {
    this.getlocalMemberId();
  }
  getlocalMemberId(){
    this.storedMemberId=window.localStorage.getItem('MemberId');
    console.log('MemberId'+this.storedMemberId);
    this.getMemberLoans(this.storedMemberId);
  }

  getMemberLoans(MemberId){
    this.service.getMemberLoansHistoryViaMemberId(MemberId).subscribe((Response)=>{
        console.log(Response);
        this.respLoans=Response;
        this.noOfLoans=this.respLoans.length;
    },(error)=>{
      this.connecting=false;
      this.disconnected=true;
    });
  }
  proceed(LoanId,LoanAmount,ApplicationDate){
    console.log(LoanId);
    if(LoanId>0){
      this.start=null;
      this.next=true;
    this.LoanId=LoanId;
    this.LoanAmount=LoanAmount;
    this.ApplicationDate=ApplicationDate;
    this.service.getLoanNominations(LoanId).subscribe((Response)=>{
      this.connecting=false;
      this.respData=Response;
      this.noOfNoms=this.respData.length;
      console.log(Response);
    },(error)=>{
      this.connecting=false;
      this.disconnected=true;
    });
    }
  }
  Reload(){
    this.navCtrl.navigate('LoanNominations');
  }
  Back(){
    this.start=true;
      this.next=null;
  }

}
