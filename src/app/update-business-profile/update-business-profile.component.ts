import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-business-profile',
  templateUrl: './update-business-profile.component.html',
  styleUrls: ['./update-business-profile.component.css']
})
export class UpdateBusinessProfileComponent implements OnInit {
  StoredfirstName:any;

  CompanyName:any="";
  CompanyBForm:any="";
  CompanyCertNumber:any="";
  CompanyRegDate:any;
  CompanyBType:any="";
  CompanyKRAPIN:any="";
  CompanyEmailAddress:any="";
  ConfirmCompanyEmailAddress:any="";
  CompanyPostalAddress:any="";
  ContactPerson:any="";
  ContactPersonPosition:any="";
  CompanyCellNumber:any="";
  Telephone2:any="";


 

  constructor() { 
    this.StoredfirstName= window.localStorage.getItem('firstName');
  }

  ngOnInit(): void {


  }

  updateEntityDetails(CompanyName,CompanyBForm,CompanyCertNumber,CompanyRegDate,CompanyBType,CompanyKRAPIN,CompanyEmailAddress,
    CompanyPostalAddress,ContactPerson,ContactPersonPosition,CompanyCellNumber,Telephone2){

  }

  

}
