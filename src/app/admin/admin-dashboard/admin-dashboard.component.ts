import { UserService } from 'src/app/shared/user.service';
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

  AllClientsList:any; 
  EntityList:any; 
  IndividualList:any; 

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
    private _snackBar: MatSnackBar, public userService: UserService) {
    this.spinnerContent='';
    this.isDisconnected=false;
    this.isConnecting=true;

   }
  
  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
    this. getNoofPendingAppraisals();
    this.getNoofPendingApproval();
    this.getNoofPendingDisbursement();

    this.getNoofAllClients();
    this.getNoofEntities();
    this.getNoofIndividuals();
  
  }

  

  Reload(){
    window.location.reload();
    
  }
  pendingDisbursements(){
    this.router.navigate(['/Pending-Disbursement-List']);
  }

  rejectedApplications(){
    this.router.navigate(['/Rejected-Loans-List']);
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

  getNoofAllClients(){
    this.userService.getAllMembers().subscribe(Response => {
      this.AllClientsList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }

  getNoofEntities(){
    this.userService.getMembersByClientType(2).subscribe(Response => {
      this.EntityList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }

  getNoofIndividuals(){
    this.userService.getMembersByClientType(1).subscribe(Response => {
      this.IndividualList = Response;
    },(error)=>{
      this.isDisconnected=true;
    });
  }

}

  