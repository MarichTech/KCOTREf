import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/shared/admin-service.service';

@Component({
  selector: 'app-non-approved-member-details',
  templateUrl: './non-approved-member-details.component.html',
  styleUrls: ['./non-approved-member-details.component.css']
})
export class NonApprovedMemberDetailsComponent implements OnInit {

  MemberId: any;
  Surname: any;
  FirstName: any;
  OtherNames: any;
  Gender: any;
  MaritalStatus: any;
  DOB: any;
  IdNo: any;
  Email: any;
  Fax: any;
  PhoneNumber: any;
  Tel1: any;
  Tel2: any;
  PostalAddress: any;
  Address:any;

  constructor(private currentRoute:ActivatedRoute,
    public service : AdminServiceService,
    private router:Router,
    private toastr: ToastrService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    if(localStorage.getItem('NonApprovedMemberId') != "null"){
      this.MemberId = localStorage.getItem('NonApprovedMemberId');

      this.getMemberDetails(this.MemberId);
    }
    

    
  }


  getMemberDetails(Id){
    if(Id != 0){
      this.service.GetMemberDetailsById(parseInt(Id)).subscribe(Response =>{
        this.MemberId=Response.member.memberid;
        this.Surname=Response.member.msurname;
        this.FirstName=Response.member.mfirstname;
        this.OtherNames=Response.member.mothername;
        this.Gender=Response.member.mgender;
        this.MaritalStatus=Response.member.mmarital;
        this.DOB=Response.member.mdob;
        this.IdNo=Response.member.IDNO;
        this.Email=Response.member.memail;
        this.Fax=Response.member.mfax;
        this.PhoneNumber=Response.member.mcell;
        this.Tel1=Response.member.mtel1;
        this.Tel2=Response.member.mtel2;
        this.PostalAddress=Response.member.mpostaladdress;
        this.Address=Response.member.maddress;
      })
    }
  }

  onBack(){
    localStorage.setItem('NonApprovedMemberId', "null");
    this.router.navigate(['A-Dashboard']);
    
  }

}
