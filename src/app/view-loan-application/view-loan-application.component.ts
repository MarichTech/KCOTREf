import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoanApplicationService } from '../shared/loan-application.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-view-loan-application',
  templateUrl: './view-loan-application.component.html',
  styleUrls: ['./view-loan-application.component.css']
})
export class ViewLoanApplicationComponent implements OnInit {

  ApplicationList: Object;//change to Object if using data tables
  temp: Object=false;
  spinnerContent:any;
  UserName:any;

  LoanTypeList:[];

  isDisconnected: boolean = false;
  Today:any;
  welcomeNote:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;
  memberId:any;
  StoredfirstName:any;
  FullName:any="";
  ClientTypeId:any;
  IdNo:any;

 


  constructor(private navCtrl: NgxNavigationWithDataComponent,private loanservice:LoanApplicationService, private userservice:UserService, public service : LoanApplicationService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar) { 
    this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';
      this.memberId = 0;
      this.StoredfirstName= window.localStorage.getItem('firstName');
      this.FullName=window.localStorage.getItem('CompanyName');

      this.loanservice.getLoanType().subscribe(res=>{
        this.LoanTypeList=res as [];
      });
    }

  ngOnInit(): void {
    this.getClientType();
    this.UserName = localStorage.getItem('UserName');
    this.memberId = localStorage.getItem('MemberId');
    this.getData();
    this.ApplicationList=[];
    window.localStorage.setItem('LoanIdParam', '0');
  }

  openSnackBar(message){
    this._snackBar.open(message, 'Ok',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    });
  }


  getData(){
    this.spinnerContent='Loading Applications....';
    this.spinner.show();
    this.userservice.getMemberPendingAppraisals(this.memberId).subscribe(Response => {
      this.spinner.hide();
      this.ApplicationList = Response;
      this.temp = true;
    },(error)=>{
      this.spinner.hide();
      this.isDisconnected=true;
    });
  }

  existingLoanApp(LoanId){
    if (LoanId>0){
      window.localStorage.setItem('LoanIdParam', LoanId);
    this.router.navigate(['/Loans']);
    }
}
generatePdf(LoanId) {
  if (LoanId>0){
  window.localStorage.setItem('LoanIdParam', LoanId);
  window.localStorage.setItem('openPdfId', 'Yes');
  this.router.navigate(['/Loans']);
  }
}

  Reload(){
    window.location.reload();
    //this.router.navigate(['/A-Dashboard']);
  }

  getClientType(){
    this.IdNo = localStorage.getItem('natIdNo');
    this.loanservice.getUserDetails(parseInt(this.IdNo)).subscribe(Response =>{
          
          this.ClientTypeId=Response.member.ClientTypeid;
         
        });
  }

  getLoanDetail(id: any) : string {
    var name: string;
    if(this.LoanTypeList){
    if(id>0){
    this.LoanTypeList.some((obj)=>{
      //var dim=obj as Element;
      if(obj["LoanTypeId"]==id){
        name=obj["LoanTypeName"];
        return true;
      }
    })}}
    return name;
  }

 
 
}


