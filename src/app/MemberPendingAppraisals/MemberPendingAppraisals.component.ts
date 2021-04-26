import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-MemberPendingAppraisals',
  templateUrl: './MemberPendingAppraisals.component.html',
  styleUrls: ['./MemberPendingAppraisals.component.css']
})
export class MemberPendingAppraisalsComponent implements OnInit {

  public  AppraisalList: Object;//change to Object if using data tables
  public temp: Object=false;
  spinnerContent:any;
  UserName:any;

  isDisconnected: boolean = false;
  Today:any;
  welcomeNote:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;
  memberId: any;
  LoanId : any;


  constructor(private navCtrl: NgxNavigationWithDataComponent, public service : UserService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar) { 
    this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';
      this.LoanId = 0;
    }

  ngOnInit(): void {

    this.memberId = localStorage.getItem('MemberId');
    if(this.memberId <= 0){
        this.navCtrl.navigate('');
    }
    this.getData();
    this.AppraisalList=[];
  }

  openSnackBar(message){
    this._snackBar.open(message, 'Ok',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    });
  }


  getData(){
    this.spinnerContent='Loading List....';
    this.spinner.show();
    this.service.getMemberPendingAppraisals(this.memberId).subscribe((Response) => {
      this.spinner.hide();
      this.AppraisalList = Response;
      this.temp = true;
    },(error)=>{
      this.spinner.hide();
      this.isDisconnected=true;
    });
  }
  
  onAppraiseApplication(NatId,LoanId){
    localStorage.setItem('UserAppraisalNatIdNo', NatId.toString());
    localStorage.setItem('UserAppraisalLoanId', LoanId.toString());
    console.log('NationalId:'+NatId);
    this.router.navigate(['/Loan-Appraisal']);
  
  }

  Reload(){
    this.navCtrl.navigate('MemberPendingAppraisals');
  }
  existingLoanApp(LoanId){
      if (LoanId>0){
        this.navCtrl.navigate('Loans',
        {
            LoanIdParam : LoanId
        });
      }
  }
  viewPDF(LoanId){
      //do nothing
  }
}


