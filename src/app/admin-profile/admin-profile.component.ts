import { Component, OnInit } from '@angular/core';
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

  Role:any="";
  UserName:any="";
  FullNames:any="";
  UserCode:any="";
  CreatedOn:any="";

  constructor(private loanservice:LoanApplicationService) {
    this.localMemberId=window.localStorage.getItem('MemberId');
   }

  ngOnInit(): void {

    this.getUserDetails();

  }

  getUserDetails(){
    window.localStorage.setItem('LoanIdParam', '0');

    this.IdNo = localStorage.getItem('natIdNo');
    this.loanservice.getUserDetails(parseInt(this.IdNo)).subscribe(Response =>{
          
          this.MemberId=Response.member.memberid;
          console.log(this.MemberId);
          this.FullNames=Response.member.mfirstname +' '+Response.member.msurname +' '+ Response.member.mothername;
          
          
          this.IdNo=Response.member.IDNO;
          
        });
  }



  changePassword(){

  }

}
