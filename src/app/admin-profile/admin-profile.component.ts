import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanApplicationService } from '../shared/loan-application.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  localMemberId:any=0;
  MemberId:any=0;
  IdNo:any=0;
  RoleId:any=0;

  Role:any="";
  UserName:any="";
  FullNames:any="";
  UserCode:any="";
  CreatedOn:any="";

  isSuccess:any="";
    errDescription:any="";
    isDisconnected: boolean = false;
    appRespData:any;

  constructor(private loanservice:LoanApplicationService,private userService: UserService,private _snackBar: MatSnackBar) {
    this.localMemberId=window.localStorage.getItem('MemberId');
    this.UserName = window.localStorage.getItem('UserName');
   }

  ngOnInit(): void {

    this.getAdminDetails();

  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Ok', {
      duration: 4000,
      verticalPosition: 'top'   
    });
  }


  getAdminDetails(){
    this.userService.getAdminDetails(this.UserName).subscribe((Response)=>{
      this.appRespData=Response;

      this.isSuccess = this.appRespData['IsSuccess'];
        this.errDescription = this.appRespData['ErrorDescription'];
         
        if (this.isSuccess==false && this.errDescription!=''){
            this.openSnackBar(this.errDescription);
          
            return;
          }
          
         // if (this.isSuccess==true){
          if(Response.userDetails.RoleId != null){this.RoleId=Response.userDetails.RoleId;}
          if(Response.userDetails.SystemUserName != null){this.UserName=Response.userDetails.SystemUserName;}
          if(Response.userDetails.SystemUserfullnames != null){this.FullNames=Response.userDetails.SystemUserfullnames;}
          if(Response.userDetails.SystemUserCode != null){this.UserCode=Response.userDetails.SystemUserCode;}
          if(Response.userDetails.CreatedOn != null){this.CreatedOn=Response.userDetails.CreatedOn;}
          this.getRoleType();
          

          //}
      
      
    }),(error)=>{
      //do nothing for now
    }
 
  }

  getRoleType(){
    this.userService.getUserRole(this.RoleId).subscribe((Response)=>{
      
          if(Response.userRoles.Roleid != null){this.RoleId=Response.userRoles.Roleid;}
          if(Response.userRoles.Rolename != null){this.Role=Response.userRoles.Rolename;}
     
    }),(error)=>{
      //do nothing for now
    }
  }



  changePassword(){

  }

}
