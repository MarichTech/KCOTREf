import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppraisalPdfService } from '../shared/appraisal-pdf.service';
import { LoanApplicationService } from '../shared/loan-application.service';

@Component({
  selector: 'app-applications-pending-disbursement',
  templateUrl: './applications-pending-disbursement.component.html',
  styleUrls: ['./applications-pending-disbursement.component.css']
})
export class ApplicationsPendingDisbursementComponent implements OnInit {

  public  ApprovalList: Object;//change to Object if using data tables
  public temp: Object=false;
  spinnerContent:any;
  UserName:any;

  isDisconnected: boolean = false;
  Today:any;
  welcomeNote:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;

  SubcountysList:[];
  WardsList:[];
  VillagesList:[];

  constructor(public service : LoanApplicationService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar, private appraisalPdf:AppraisalPdfService) { 
    this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';

      this.service.getSubCountysList().subscribe(res=>{
        this.SubcountysList=res as [];
      });

      this.service.getWardsList().subscribe(res=>{
        this.WardsList=res as [];
      });

      this.service.getVillagesList().subscribe(res=>{
        this.VillagesList=res as [];
      });
    }

  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
    this.getData();
    this.ApprovalList=[];
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
    this.service.getApprovalList().subscribe(Response => {
      this.spinner.hide();
      this.ApprovalList = Response;
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

  onView(){
   
  
  }


  Reload(){
    window.location.reload();
    
  }


    getSubCounty(id: any) : string {
      var name: string;
      if(this.SubcountysList){
      if(id>0){
      this.SubcountysList.some((obj)=>{
        //var dim=obj as Element;
        if(obj["EmpoyerId"]==id){
          name=obj["SubcopuntyName"];
          return true;
        }
      })}}
      return name;
    }


    getWards(id: any) : string {
      var name: string;
      if(this.WardsList){
      if(id>0){
      this.WardsList.some((obj)=>{
        //var dim=obj as Element;
        if(obj["WardId"]==id){
          name=obj["WardName"];
          return true;
        }
      })}}
      return name;
    }


    getVillages(id: any) : string {
      var name: string;
      if(this.VillagesList){
      if(id>0){
      this.VillagesList.some((obj)=>{
        //var dim=obj as Element;
        if(obj["VillageId"]==id){
          name=obj["VillageName"];
          return true;
        }
      })}}
      return name;
    }
  

}


