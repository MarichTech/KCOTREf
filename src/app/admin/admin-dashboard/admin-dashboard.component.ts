import { AdminServiceService } from './../../shared/admin-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanApplicationService } from 'src/app/shared/loan-application.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  ApplicationList:any;//Pending Appraisal
  AppraisalList:any;//Pending Approval
  ApprovalList:any; //Pending Disbursement

  spinnerContent:any;
  UserName:any;
  Connecting:any;
  isConnecting:any;

  isDisconnected: boolean = false;
  Today:any;
  welcomeNote:any;

  //Dashboard
  PendingAppraisal:any=5;
  PendingApproval:any=6;
  ApprovedForms:any=3;
  UnApprovedMembers:any=4;
  PendingDisbursements:any=0;
  AllApplications:any=0;
  

  KocotrefPrincipal:any=0;
  KocotrefInterest:any=0;
  KocotrefPenalty:any=0;
  KocotrefTotalMembers:any=0;
  KocotrefIndividuals:any=0;
  KocotrefEntities:any=0;
  KocotrefTotalLoans:any=0;
  KocotrefNoOfLoans:any=0;

  PrincipalPaid:any=0;
  InterestPaid:any=0;
  PenaltyPaid:any=0;
  TotalRepayments:any=0;


  
  constructor(public service : LoanApplicationService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar) {
    this.spinnerContent='';
    this.isDisconnected=false;
    this.isConnecting=true;

   }
  
  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
    this. getNoofPendingAppraisals();
    this.getNoofPendingApproval();
    this.getNoofPendingDisbursement();
  
  }

  

  Reload(){
    window.location.reload();
    
  }
  pendingDisbursements(){
    this.router.navigate(['/Pending-Disbursement-List']);
  }

  allApplications(){

  }

  unApprovedMembers(){
    
   this.router.navigate(['/Non-ApprovedMembers']);
  }

  PendingAppraisalForms(){
    this.router.navigate(['/Pending-Appraisal-List']);
  }
  pendingApprovalForms(){
    this.router.navigate(['/Pending-Approval-List']);
  }
  approvedApplicationForms(){
    
  }

  getNoofPendingAppraisals(){
    this.service.getPendingAppraisalList().subscribe(Response => {
      this.ApplicationList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }

  getNoofPendingApproval(){
    this.service.getAppraisalList().subscribe(Response => {
      this.AppraisalList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }

  getNoofPendingDisbursement(){
    this.service.getApprovalList().subscribe(Response => {
      this.ApprovalList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }

}

  