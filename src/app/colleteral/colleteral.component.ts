import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoanApplicationService } from 'src/app/shared/loan-application.service';
import { LoanSecurity } from 'src/app/shared/loan-security.model';
import { CurrencyPipe } from '@angular/common';
//import { ClientTypeService } from 'src/app/shared/client-type.service';
import { Collateralstypes } from 'src/app/shared/collateralstypes';


@Component({
  selector: 'app-colleteral',
  templateUrl: './colleteral.component.html',
  styleUrls: ['./colleteral.component.css']
})
export class ColleteralComponent implements OnInit {
  formColleteral:LoanSecurity;
  isValid:boolean=true;
  formattedcollateralValue;
  collaterallist:Collateralstypes[];
 
  
  constructor(public loanService:LoanApplicationService,private currencyPipe : CurrencyPipe) { }

  ngOnInit() {
   // this.loanService.GettblColleterals().then(res =>this.collaterallist = res as Collateralstypes[] );
  

this.resetForm();   
  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.formColleteral ={
      LoanCollateralId:null,
      loanid :null,
      Collateralname :'',
       ownername :'',
       ownerdocument:'',
       collateralremarks :'',
       collateralvalue:0,
    }

  }

  onSubmit( form:NgForm){
    if(this.formValidation(form.value)){
     // this.loanService.collateral.push(form.value);
      this.resetForm();
  
  
    
    }

  }
  formValidation(form:LoanSecurity){
    this.isValid=true;
    if(this.formColleteral.Collateralname=='')
    this.isValid=false;
    else if(this.formColleteral.ownerdocument=='')
    this.isValid=false;
    else if(this.formColleteral.ownername=='')
    this.isValid=false;
    else if(this.formColleteral.collateralvalue==0)
    this.isValid=false;
    
    return this.isValid;
  }
  transformcollateralvalue(element){
    this.formattedcollateralValue = this.currencyPipe.transform(this.formColleteral.collateralvalue, 'Ksh.');
   

    element.target.value = this.formattedcollateralValue

  }
  transformRepayAmount(element){
    

  }
}
