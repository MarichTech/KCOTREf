import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guarantors } from 'src/app/shared/guarantors';
import { LoanApplicationService } from 'src/app/shared/loan-application.service';
@Component({
  selector: 'app-guarators',
  templateUrl: './guarators.component.html',
  styleUrls: ['./guarators.component.css']
})
export class GuaratorsComponent implements OnInit {
    formData:Guarantors;
    isValid:boolean=true;
    Patternemail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private loanService:LoanApplicationService
  ) { }

  ngOnInit(){
    
  this.resetForm();
  

  }
  resetForm(form?:NgForm){
    if(form !=null)
    form.resetForm();
    this.formData ={
      LoanRefereeId:null,
      LoanId :null,
      NameOne	:'',
      IDOne:'',
      EmailOne:'',
      PhoneOne:'',
      LocationAddress1:'',
      

    }

  }
  onSubmit(form:NgForm){
    if(this.formValidation(form.value)){
    // this.loanService.guarantors.push(form.value);
     this.resetForm();

    }
  }
  formValidation(form:Guarantors){
    this.isValid=true;
    if(this.formData.NameOne=='')
    this.isValid=false;
    else if(this.formData.EmailOne=='')
    this.isValid=false;
    else if(this.formData.IDOne=='')
    this.isValid=false;
    else if(this.formData.LocationAddress1=='')
    this.isValid=false;
    else if(this.formData.PhoneOne=='')
    this.isValid=false;
    return this.isValid;
  }
 

}
