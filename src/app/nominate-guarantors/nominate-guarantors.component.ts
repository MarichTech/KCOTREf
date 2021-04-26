import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-nominate-guarantors',
  templateUrl: './nominate-guarantors.component.html',
  styleUrls: ['./nominate-guarantors.component.css']
})
export class NominateGuarantorsComponent implements OnInit {
  storedMemberId:any;
  connecting:any;
  disconnected:any;
  respLoans:any;
  next:any;
  respMember:any;
  guarantorId:any;
  errMessage:any;
  guarantorName:any;
  memberNumber:any;
  LoanId:any;
  LoanAmount:any;
  ApplicationDate:any;
  next2:any;
  nominatedAmount:any;
  respData:any;

  constructor(private service:UserService,private navCtrl:NgxNavigationWithDataComponent) { 
     this.next=false;
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
    },(error)=>{
      this.connecting=false;
      this.disconnected=true;
    });
  }
  proceed(LoanId,LoanAmount,ApplicationDate){
    this.next =true;
    this.LoanId=LoanId;
    this.LoanAmount=LoanAmount;
    this.ApplicationDate=ApplicationDate;
  }
  Search(memberNumber){
    console.log(memberNumber);
    if(memberNumber!=''&&memberNumber!='undefined'){
        this.service.getMemberDetailsviaMemberNo(memberNumber).subscribe((Response)=>{
          this.respMember=Response;
          console.log(Response);
          this.guarantorId =this.respMember["MemberId"];
          this.guarantorName=this.respMember["FirstName"]+' '+this.respMember["OtherNames"];
          this.next2=true;
          this.next=null;
        },(error)=>{
          this.errMessage="An error occurred while searching member";
        })
    }
  }
  submit(nominatedAmount){
    if(nominatedAmount>0.00){
        this.service.submitGuarantorNomination(0,this.storedMemberId,this.guarantorId,this.LoanId,nominatedAmount,0,this.guarantorName).subscribe((Response)=>{
          console.log(Response);
          this.respData=Response;
          if (this.respData["IsSuccess"]==true){
            window.alert('Loan Guarantor was added successfully');
            this.navCtrl.navigate('LoanNominations',{
              'LoanId': this.LoanId,
              'LoanAmount':this.LoanAmount,
              'ApplicationDate':this.ApplicationDate
            });

          }else{
            window.alert('Process failed. Please confirm guarantor details and try again');
            return;
          }
        },(error)=>{
          window.alert('Please check your internet connection and try again');
          return;
        });
    }
  }

}
