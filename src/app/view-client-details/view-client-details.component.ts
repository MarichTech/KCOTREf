import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoanApplicationService } from '../shared/loan-application.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-view-client-details',
  templateUrl: './view-client-details.component.html',
  styleUrls: ['./view-client-details.component.css']
})
export class ViewClientDetailsComponent implements OnInit {
//Tab Manipulation
selectedIndex: number = 0;
maxNumberOfTabs: number = 2;

//Tab Labels
Tab1: any='Personal Details';
Tab2: any='Business Details';

 StoredfirstName:any;

 //Personal Details
 Firstname:any="";
 Othernames:any="";
 Surname:any="";
 DOB:any;
 Gender:any="";
 LevelOfEducation:any="";
 NatIdNo:any="";
 PostalAddress:any="";
 MobileNo:any="";
 AlternativePhoneNumber:any="";
 EmailAddress:any="";
 ConfirmEmailAddress:any="";
 Empstatus:any="";
 personalKRA:any="";
 StationId:any="";
 DepartmentId:any="";
 EmployerId:any="";
 ClientTypeId:any="";
 SecretQuestion:any="";
 PysicalLocation:any="";

  //Business Details
  BName:any="";
  LegalStatus:any=0;
  BForm:any="";
  RegistrationNo:any="";
  BRegDate:any;
  BKRA:any="";
  BType:any="";
  BusinessPhysicalAddress:any="";
  ContactPersonPosition:any="";
  ContactPerson:any="";


  RegValue:any;
  show:any=false;
  isSuccess:any="";
   errDescription:any="";
   spinnerContent:any;
   isDisconnected: boolean = false;
   appRespData:any;
   MemberId:any=0;
   FullNames:any="";




 constructor(private userService: UserService, private router:Router, private _snackBar: MatSnackBar,
   private toastr: ToastrService,private spinner:NgxSpinnerService, private loanService: LoanApplicationService) { 

     this.StoredfirstName= window.localStorage.getItem('firstName');
     this.FullNames=window.localStorage.getItem('CompanyName');
    this.MemberId= window.localStorage.getItem('viewMemberId');
    this.NatIdNo= window.localStorage.getItem('viewNatIdNo');
   this.selectedIndex = parseInt(window.localStorage.getItem('selectedIndex'));
   this.spinnerContent='';
     this.isSuccess=false;
     this.isDisconnected=false;
 }

 ngOnInit(): void {
   console.log(this.MemberId+"memId");
   this.getUserDetails();
   this.getUserBusinessDetails();
 }

 openSnackBar(message) {
   this._snackBar.open(message, 'Ok', {
     duration: 4000,
     verticalPosition: 'top'   
   });
 }

 nextStep() {
   if (this.selectedIndex != this.maxNumberOfTabs) {
     this.selectedIndex = this.selectedIndex + 1;
   }
 }

 previousStep() {
   if (this.selectedIndex != 0) {
     this.selectedIndex = this.selectedIndex - 1;
   }
 }

 informChange(tabIndex:number) {
   this.selectedIndex = tabIndex;
 }

 



 getUserDetails(){
   console.log('UpdateMemberId'+this.MemberId);
   this.userService.getMemberProfile(this.MemberId).subscribe((Response)=>{
     this.appRespData=Response;

     this.isSuccess = this.appRespData['IsSuccess'];
       this.errDescription = this.appRespData['ErrorDescription'];
       console.log('UpdateSuccess'+this.isSuccess);
        
       if (this.isSuccess==false && this.errDescription!=''){
           this.openSnackBar(this.errDescription);
         
           return;
         }
         
         if(Response.Individualmember.mdob != null){ this.DOB=Response.Individualmember.mdob;}
         if(Response.Individualmember.mgender != null){this.Gender=Response.Individualmember.mgender;}
         if(Response.Individualmember.LevelOfEducation != null){this.LevelOfEducation=Response.Individualmember.LevelOfEducation;}
         if(Response.Individualmember.mpostaladdress != null){this.PostalAddress=Response.Individualmember.mpostaladdress;}
         if(Response.Individualmember.mcell != null){this.MobileNo=Response.Individualmember.mcell;}
         if(Response.Individualmember.mtel1 != null){this.AlternativePhoneNumber=Response.Individualmember.mtel1;}
         if(Response.Individualmember.memail != null){this.EmailAddress=Response.Individualmember.memail;}
         if(Response.Individualmember.EmploymentStatus != null){ this.Empstatus=Response.Individualmember.EmploymentStatus;}
         if(Response.Individualmember.personalKRA != null){this.personalKRA=Response.Individualmember.personalKRA;}
          
           this.loanService.getUserDetails(parseInt(this.NatIdNo)).subscribe(Response =>{
             this.appRespData=Response;

             this.isSuccess = this.appRespData['IsSuccess'];
             
             this.errDescription = this.appRespData['ErrorDescription'];
        
               if (this.isSuccess==false && this.errDescription!=''){
                   this.openSnackBar(this.errDescription);
                 
                   return;
                 }
                // if (this.isSuccess==true){
                   if(Response.member.memberid != null){this.MemberId=Response.member.memberid;}
                   if(Response.member.FormOfBusiness != null){this.BForm=Response.member.FormOfBusiness;}
                   if(Response.member.mfirstname != null){this.Firstname=Response.member.mfirstname;}
                   if(Response.member.mothername != null){this.Othernames=Response.member.mothername;}
                   if(Response.member.msurname != null){this.Surname=Response.member.msurname;}
                   if(Response.member.stationid != null){this.StationId = Response.member.stationid;}
                   if(Response.member.maddress != null){this.PysicalLocation = Response.member.maddress;}
                   if(Response.member.deptid != null){this.DepartmentId = Response.member.deptid;}
                   if(Response.member.employerid != null){this.EmployerId = Response.member.employerid;}
                   if(Response.member.ClientTypeid != null){this.ClientTypeId=Response.member.ClientTypeid;}
                   if(Response.member.ContantPerson != null){this.ContactPerson = Response.member.ContantPerson;}
                   if(Response.member.ContantPersonPosition != null){this.ContactPersonPosition = Response.member.ContantPersonPosition;}
                   
                 
                 //}
                 
               });
        
     
     
   }),(error)=>{
     //do nothing for now
   }
 }

 getUserBusinessDetails(){
   this.userService.getMemberBusinessDetails(this.MemberId).subscribe((Response)=>{
     this.appRespData=Response;

     this.isSuccess = this.appRespData['IsSuccess'];
       this.errDescription = this.appRespData['ErrorDescription'];
        
       if (this.isSuccess==false && this.errDescription!=''){
           this.openSnackBar(this.errDescription);
         
           return;
         }
         
        // if (this.isSuccess==true){
         if(Response.IndividualbusinessDetails.BusinessName != null){this.BName=Response.IndividualbusinessDetails.BusinessName;}
         if(Response.IndividualbusinessDetails.LegalStatus != null){this.LegalStatus=Response.IndividualbusinessDetails.LegalStatus;}
         if(Response.IndividualbusinessDetails.FormOfBusiness != null && this.ClientTypeId==1){this.BForm=Response.IndividualbusinessDetails.FormOfBusiness;}
         if(Response.IndividualbusinessDetails.BusinessRegistrationNo != null){this.RegistrationNo=Response.IndividualbusinessDetails.BusinessRegistrationNo;}
         if(Response.IndividualbusinessDetails.Regdate != null){this.BRegDate=Response.IndividualbusinessDetails.Regdate;}
         if(Response.IndividualbusinessDetails.Telephone1 != null){this.BKRA=Response.IndividualbusinessDetails.Telephone1;}
         if(Response.IndividualbusinessDetails.BusinessType != null){this.BType=Response.IndividualbusinessDetails.BusinessType;}
         if(Response.IndividualbusinessDetails.PhysicalAddress != null){this.BusinessPhysicalAddress=Response.IndividualbusinessDetails.PhysicalAddress;}
       

         //}
     
     
   }),(error)=>{
     //do nothing for now
   }

 }

 onlyNumbersAllowed(event):boolean
 {
   const charCode =(event.which)?event.which:event.keyCode;
   if(charCode >31 && (charCode <48 || charCode>57)){
     console.log(charCode)
     return false;
   }
   return true;

 }


 getId(id: number) {
  
   this.RegValue = id;
   if(this.RegValue==1){
     this.show=true;
   } 
   else{
     this.show=false;
   }  
 }

}
