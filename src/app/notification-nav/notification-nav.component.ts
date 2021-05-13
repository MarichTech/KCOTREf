import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-notification-nav',
  templateUrl: './notification-nav.component.html',
  styleUrls: ['./notification-nav.component.css']
})
export class NotificationNavComponent implements OnInit {

  NotificationList:any;
  localMemberId:any;
  loanAppResp:any;
  isSuccess:any="";
  errDescription:any="";

  constructor(private service:UserService, private router:Router, private _snackBar: MatSnackBar) { 
    this.localMemberId=window.localStorage.getItem('MemberId');
    this.isSuccess=false;
    this.errDescription='';
  }

  ngOnInit(): void {

    this.getNewNotifications();
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Ok', {
      duration: 4000,
      verticalPosition: 'top'   
    });
  }


  ReadNotification(Id){
    console.log(Id+"News")
    this.service.updateNotification(Id).subscribe(Response => {
         
          this.loanAppResp = Response;
          this.isSuccess = this.loanAppResp['IsSuccess'];
          this.errDescription = this.loanAppResp['ErrorDescription'];
           
          if (this.isSuccess==false && this.errDescription!=''){
              this.openSnackBar(this.errDescription);
              return;
            }
            
            if (this.isSuccess==true){
              this.router.navigate(['/Notifications']);
            }
      
    },(error)=>{
     // this.isDisconnected=true;
    });
    
  }

  getNewNotifications(){
    this.service.getUnReadNotification(this.localMemberId).subscribe(Response => {
      this.NotificationList = Response;
    },(error)=>{
     // this.isDisconnected=true;
    });
  }

  

}
