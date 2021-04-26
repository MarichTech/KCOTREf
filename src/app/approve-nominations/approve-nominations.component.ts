import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-approve-nominations',
  templateUrl: './approve-nominations.component.html',
  styleUrls: ['./approve-nominations.component.css']
})
export class ApproveNominationsComponent implements OnInit {
  storedMemberId:any;
  respGRequests:any;
  noOfRequests:any;
  connecting:any;
  disconnected:any;
  start:any;
  next:any;
  NominatedGuarantorId:any;
  GuarantorId:any;
  LoanId:any;
  CreatedBy:any;
  requestedAmount:any;
  apprAmount:any;
  resAppr:any;
  uploadingApproval:any;

  constructor(private service:UserService,private navCtrl:NgxNavigationWithDataComponent) { 
    this.start=true;
    this.uploadingApproval=false;
  }

  ngOnInit(): void {
    this.getlocalMemberId();
  }
  getlocalMemberId(){
    this.storedMemberId=window.localStorage.getItem('MemberId');
    console.log('MemberId'+this.storedMemberId);
    this.getGRequests(this.storedMemberId);
  }

  getGRequests(MemberId){
    this.service.getApprovalList(MemberId).subscribe((Response)=>{
        console.log(Response);
        this.respGRequests=Response;
        this.noOfRequests=this.respGRequests.length;
    },(error)=>{
      this.connecting=false;
      this.disconnected=true;
    });
  }
  Reload(){
    this.navCtrl.navigate('ApproveNominations');
  }
  Home(){
    this.navCtrl.navigate('Home');
  }

  approve(NominatedGuarantorId,GuarantorId,LoanId,ReqAmount,CreatedBy){
    this.NominatedGuarantorId=NominatedGuarantorId;
    this.GuarantorId=GuarantorId;
    this.LoanId=LoanId;
    this.requestedAmount=ReqAmount;
    this.CreatedBy=CreatedBy;
    this.start=null;
    this.next=true;
  }
  approveFinal(apprAmount){
    if(apprAmount>0.00){
      this.uploadingApproval=true;
      this.next==null;
      this.service.submitGuarantorNomination(this.NominatedGuarantorId,0,this.GuarantorId,this.LoanId,apprAmount,2,this.CreatedBy).subscribe((Response)=>{
        console.log(Response);
        this.resAppr=Response;
        this.uploadingApproval=false;
        if (this.resAppr["IsSuccess"]==true){
          window.alert('Guarantor approval was added successfully');
          this.start=true;
          this.next=null;
        }
      },(error)=>{
        this.uploadingApproval=false;
        //this.connecting=false;
        this.disconnected=true;
      });

    }
  }

}
