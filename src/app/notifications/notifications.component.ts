import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoanApplicationService } from '../shared/loan-application.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  spinnerContent:any;
  isDisconnected: boolean = false;

  loanAppResp:any;
  isSuccess:any="";
  errDescription:any="";

  StoredfirstName:any;
  FullName:any="";
  IdNo:any;

  ClientTypeId:any;
  NewNotificationList:any;
  OldNotificationList:any;
  localMemberId:any;
  newNotification:any=0;
  oldNotification:any=0;
  noNotification:any=0;

  constructor(private _snackBar: MatSnackBar,private loanservice:LoanApplicationService, private spinner:NgxSpinnerService, private userService:UserService) { 
    this.isSuccess=false;
      this.isDisconnected=false;
      this.errDescription='';
      this.StoredfirstName= window.localStorage.getItem('firstName');
      this.FullName=window.localStorage.getItem('CompanyName');
      this.localMemberId=window.localStorage.getItem('MemberId');
  }

  ngOnInit(): void {
    this.getClientType();
    this.getNewNotifications();
    this.getOldNotifications();
  }

  Reload(){
    window.location.reload();
  }

  getClientType(){
    this.IdNo = localStorage.getItem('natIdNo');
    this.loanservice.getUserDetails(parseInt(this.IdNo)).subscribe(Response =>{
          
          this.ClientTypeId=Response.member.ClientTypeid;
         
        });
  }

  getNewNotifications(){
    this.userService.getUnReadNotification(this.localMemberId).subscribe(Response => {
      this.NewNotificationList = Response;
      if(this.NewNotificationList.length > 0){
        
        this.newNotification = 1;
      }
      
    },(error)=>{
     // this.isDisconnected=true;
    });
  }

  getOldNotifications(){
    this.userService.getAllReadNotification(this.localMemberId).subscribe(Response => {
      this.OldNotificationList = Response;
      if(this.OldNotificationList.length > 0){
        
        this.oldNotification = 1;
      }
      
    },(error)=>{
     // this.isDisconnected=true;
    });
  }

}
