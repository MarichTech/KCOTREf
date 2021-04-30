import { AppraisalPdfService } from './../shared/appraisal-pdf.service';
import {  ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoanApplicationService } from '../shared/loan-application.service';

@Component({
  selector: 'app-loan-appraisal',
  templateUrl: './loan-appraisal.component.html',
  styleUrls: ['./loan-appraisal.component.css']
})
export class LoanAppraisalComponent implements OnInit {

  //Tab Manipulation
  selectedIndex: number = 0;
  maxNumberOfTabs: number = 6;

  //Tab Labels
  Tab1: any="(A.) PERSONAL DETAILS";
  Tab2: any="(B.) BUSINESS DETAILS";
  Tab3: any="(C.) BUSINESS PERFORMANCE ANALYSIS";
  Tab4: any="(D.) OTHER DETAILS";
  Tab5: any="(E.) Loan Appraisal Score Sheet";
  Tab6: any="Recommendations";

  //Table Tab Manipulation
  selectedIndex1: number = 0;
  maxNumberOfTabs1: number = 2;

  //Table Tab Labels
  Tabs1: any="(i)  CASH FLOW ANALYSIS FORM";
  Tabs2: any="(ii) PROFIT AND LOSS STATEMENT ";

  //Personal Details
  FullNames:any="";
  IdNo:any="";
  PinNo:any="";
  PostalAddress:any="";
  Email:any="";
  Telephone:any="";

  //Business Details
  TypeofBusiness:any="";
  BeenInOperation:any="";
  BeenInOperationTime:any="";
  BeenInOperationEdit:any="";
  IsRegistered:any="";
  CompanyBForm:any="";
  TradeLicense:any="";

  //Business premises
  TypeofBuilding:any="";
  Condition:any="";
  OwnBuilding:any="";
  BuildingOwnerName:any="";
  BuildingOwnerAddress:any="";
  BuildingRent:any="";
  LayoutAndCleanliness:any="";

  //Business Records:
  CashBook:any="";
  CreditLedger:any="";
  StockBooks:any="";
  OtherBooks:any="";
  OtherBooksDescription:any="";
  IsBooksUpToDate:any="";
  WhoKeepsBooks:any="";
  IsPersonalDrawingsRecorded:any="";
  HaveBusinessBank:any="";
  BankName:any="";
  BankBranch:any="";
  BankAccountNo:any="";

  //OTHER DETAILS
  SecurityType:any="";
  ApproximateValOfSecurity:any="";
  AdequacyofSecurity:any="";
  Competitors:any="";
  GeneralSafety:any="";
  Regulations:any="";
  TechnologyUsed:any="";
  DateofVisit:any= new Date;

  // Loan Appraisal Score Sheet
  PurposeActualScore:number=0;
  PurposeRemarks:any="";
  CharacterActualScore:number=0;
  CharacterRemarks:any="";
  SecurityActualScore:number=0;
  SecurityRemarks:any="";
  AbilityActualScore:number=0;
  AbilityRemarks:any="";
  AmountActualScore:number=0;
  AmountRemarks:any="";
  TotalActualScore:number=0;
  TotalRemarks:any="";
  BoardRecommendations:any="";
  RecommDate:any="";
  RecommName:any="";

  //CASH FLOW ANALYSIS FORM
  //(A.) Cash in the bank
  A1:number=0; A2:number=0; A3:number=0; A4:number=0; A5:number=0; A6:number=0;
  //(B.) Cash in hand at the start of the month
  B1:number=0; B2:number=0; B3:number=0; B4:number=0; B5:number=0; B6:number=0;
  //(C) Cash  sales
  C1:number=0; C2:number=0; C3:number=0; C4:number=0; C5:number=0; C6:number=0;
  //Total cash (A+B+C)
  ABC1:number=0; ABC2:number=0; ABC3:number=0; ABC4:number=0; ABC5:number=0; ABC6:number=0;
  //(D) Other monies expected
  D1:number=0; D2:number=0; D3:number=0; D4:number=0; D5:number=0; D6:number=0;
  //Total cash inflows (A+B+C+D)
  ABCD1:number=0; ABCD2:number=0; ABCD3:number=0; ABCD4:number=0; ABCD5:number=0; ABCD6:number=0;
  //(E)) Cash  Purchases
  E1:number=0; E2:number=0; E3:number=0; E4:number=0; E5:number=0; E6:number=0;
  //(F) Cash Payments
  F1:number=0; F2:number=0; F3:number=0; F4:number=0; F5:number=0; F6:number=0;
  //Total Cash outflows(E+F)
  EF1:number=0; EF2:number=0; EF3:number=0; EF4:number=0; EF5:number=0; EF6:number=0;
  //Surplus/Deficit (S)
  S1:number=0; S2:number=0; S3:number=0; S4:number=0; S5:number=0; S6:number=0;

  //(ii) PROFIT AND LOSS STATEMENT
  //a) Monthly sales(MS)
  MS1:number=0; MS2:number=0; MS3:number=0; MS4:number=0; MS5:number=0; MS6:number=0;
  //b) opening stock(OS)
  OS1:number=0; OS2:number=0; OS3:number=0; OS4:number=0; OS5:number=0; OS6:number=0;
  //c) Purchases  for that month
  PM1:number=0; PM2:number=0; PM3:number=0; PM4:number=0; PM5:number=0; PM6:number=0;
  //d)Goods available for sale(B+C)
  GBC1:number=0; GBC2:number=0; GBC3:number=0; GBC4:number=0; GBC5:number=0; GBC6:number=0;
  //e) Closing Stock
  CS1:number=0; CS2:number=0; CS3:number=0; CS4:number=0; CS5:number=0; CS6:number=0;
  //f) Cost of goods Sold(D-E)
  DE1:number=0; DE2:number=0; DE3:number=0; DE4:number=0; DE5:number=0; DE6:number=0;
  //g) Gross Profit(A-F)
  AF1:number=0; AF2:number=0; AF3:number=0; AF4:number=0; AF5:number=0; AF6:number=0;
  //h) Operating expenses
  OE1:number=0; OE2:number=0; OE3:number=0; OE4:number=0; OE5:number=0; OE6:number=0;
  //i)  Net Profit(G-H)
  GH1:number=0; GH2:number=0; GH3:number=0; GH4:number=0; GH5:number=0; GH6:number=0;


  MemberId: any=0;
  LoanId: any=0;
  Id: any=0;


  loanResp:any;
  loanAppResp:any;
  isSuccess:any;
  errDescription:any;
  spinnerContent:any;
  
  constructor(private toastr: ToastrService,private router:Router,private loanservice:LoanApplicationService,
    private spinner:NgxSpinnerService,private _snackBar: MatSnackBar, private appraisalPdf:AppraisalPdfService) { 
    this.isSuccess=false;
    this.errDescription='';
    this.spinnerContent='';
  }

  ngOnInit(): void {
    if(localStorage.getItem('UserAppraisalNatIdNo') != ''){
      this.LoanId = parseInt(localStorage.getItem('UserAppraisalLoanId'));
    this.getUserDetails();
    }else{
      localStorage.setItem('UserAppraisalNatIdNo', '');
      localStorage.setItem('UserAppraisalLoanId', '');
    }
    
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'Ok', {
      duration: 4000,
      verticalPosition: 'top'   
    });
  }


  getUserDetails(){
    this.IdNo = localStorage.getItem('UserAppraisalNatIdNo');

    this.loanservice.getUserDetails(parseInt(this.IdNo)).subscribe(Response =>{
          this.MemberId=Response.member.memberid;
          this.FullNames=Response.member.mfirstname +' '+Response.member.msurname +' '+ Response.member.mothername;
          this.IdNo=Response.member.IDNO;
          this.PinNo=Response.member.personalKRA;
          this.PostalAddress=Response.member.mpostaladdress;
          this.Email=Response.member.memail;
          this.Telephone=Response.member.mcell;
  
    })
  
  }

  onSubmit(TypeofBusiness,BeenInOperation,BeenInOperationTime,IsRegistered,CompanyBForm,TradeLicense,TypeofBuilding,
    Condition,OwnBuilding,BuildingOwnerName,BuildingOwnerAddress,BuildingRent,LayoutAndCleanliness,CashBook,CreditLedger,
           StockBooks,OtherBooks,OtherBooksDescription,IsBooksUpToDate,WhoKeepsBooks,IsPersonalDrawingsRecorded,HaveBusinessBank,
           BankName,BankBranch,A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,C6,ABC1,ABC2,ABC3,ABC4,ABC5,ABC6,D1,D2,D3,D4,
           D5,D6,ABCD1,ABCD2,ABCD3,ABCD4,ABCD5,ABCD6,E1,E2,E3,E4,E5,E6,F1,F2,F3,F4,F5,F6,EF1,EF2,EF3,EF4,EF5,EF6,S1,S2,S3,S4,S5,S6,MS1,MS2,MS3,MS4,MS5,MS6,
           OS1,OS2,OS3,OS4,OS5,OS6,PM1,PM2,PM3,PM4,PM5,PM6,GBC1,GBC2,GBC3,GBC4,GBC5,GBC6,CS1,CS2,CS3,CS4,CS5,CS6,DE1,DE2,DE3,DE4,DE5,DE6,AF1,AF2,AF3,AF4,AF5,AF6,
           OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
           DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
           AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks){

      this.spinnerContent='Appraising Application....';
      this.spinner.show();
      console.log('LoanId:'+this.LoanId);
      this.loanservice.saveAppraisalFormDetails(this.LoanId,this.MemberId,TypeofBusiness,BeenInOperation,BeenInOperationTime,IsRegistered,CompanyBForm,TradeLicense,TypeofBuilding,
        Condition,OwnBuilding,BuildingOwnerName,BuildingOwnerAddress,BuildingRent,LayoutAndCleanliness,CashBook,CreditLedger,
        StockBooks,OtherBooks,OtherBooksDescription,IsBooksUpToDate,WhoKeepsBooks,IsPersonalDrawingsRecorded,HaveBusinessBank,
        BankName,BankBranch,A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,C6,D1,D2,D3,D4,
        D5,D6,E1,E2,E3,E4,E5,E6,F1,F2,F3,F4,F5,F6,MS1,MS2,MS3,MS4,MS5,MS6,
        OS1,OS2,OS3,OS4,OS5,OS6,PM1,PM2,PM3,PM4,PM5,PM6,GBC1,GBC2,GBC3,GBC4,GBC5,GBC6,CS1,CS2,CS3,CS4,CS5,CS6,DE1,DE2,DE3,DE4,DE5,DE6).subscribe((Response) =>{

          this.loanAppResp = Response;
          this.isSuccess = this.loanAppResp['IsSuccess'];
          this.errDescription = this.loanAppResp['ErrorDescription'];
           
          if (this.isSuccess==false && this.errDescription!=''){
              this.openSnackBar(this.errDescription);
              this.spinner.hide();
              return;
            }
            
            if (this.isSuccess==true){
              
              this.spinner.hide();

              this.Id =this.loanAppResp['Id'];
              console.log('Apprais Id '+this.loanAppResp['Id']);

              this.saveAppraisalDetails2(this.Id,AF1,AF2,AF3,AF4,AF5,AF6,
                OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
                DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
                AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,this.BoardRecommendations,this.RecommDate,CreditLedger,StockBooks,OtherBooks,OtherBooksDescription,HaveBusinessBank);
            }
        
         
        

      },(error)=>{
        this.spinner.hide();
        //this.isDisconnected=true;
      });
  }

  saveAppraisalDetails2(Id,AF1,AF2,AF3,AF4,AF5,AF6,
    OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
    DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
    AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,BoardRecommendations,RecommDate,CreditLedger,StockBooks,OtherBooks,OtherBooksDescription,HaveBusinessBank){

      this.spinnerContent='Appraising Application....';
      this.spinner.show();

    this.loanservice.saveApprasisalFormPart2(Id,AF1,AF2,AF3,AF4,AF5,AF6,
      OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
      DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
      AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,BoardRecommendations,RecommDate,CreditLedger,StockBooks,OtherBooks,OtherBooksDescription,HaveBusinessBank,this.LoanId).subscribe((Response)=>{
        this.loanAppResp = Response;
        this.isSuccess = this.loanAppResp['IsSuccess'];
        this.errDescription = this.loanAppResp['ErrorDescription'];
         
        if (this.isSuccess==false && this.errDescription!=''){
            this.openSnackBar(this.errDescription);
            this.spinner.hide();
            return;
          }
          
          if (this.isSuccess==true){
            this.toastr.success('Application Appraised','');
            this.spinner.hide();
            this.router.navigate(['/A-Dashboard']);
            
            
          }
      
        
    },(error)=>{
      this.spinner.hide();
      //this.isDisconnected=true;
    });
  }




  onProgress1(){

  }
  onProgressTable1(){
    
  }




  formulation(){
    this.BeenInOperationEdit =  this.BeenInOperation + " "+this.BeenInOperationTime; 

    this.TotalActualScore = this.AmountActualScore + this.AbilityActualScore + this.PurposeActualScore + this.SecurityActualScore + this.CharacterActualScore;

    //Total cash (A+B+C)
    //CASH FLOW ANALYSIS FORM
    this.ABC1 = this.A1 + this.B1 +this.C1;   this.ABC2 = this.A2 + this.B2 +this.C2; this.ABC3 = this.A3 + this.B3 +this.C3;
    this.ABC4 = this.A4 + this.B4 +this.C4;   this.ABC5 = this.A5 + this.B5 +this.C5; this.ABC6 = this.A6 + this.B6 +this.C6;

    //Total cash inflows (A+B+C+D)
    this.ABCD1 = this.A1 + this.B1 +this.C1 +this.D1;   this.ABCD2 = this.A2 + this.B2 +this.C2 +this.D1; this.ABCD3 = this.A3 + this.B3 +this.C3 +this.D1;
    this.ABCD4 = this.A4 + this.B4 +this.C4 +this.D1;   this.ABCD5 = this.A5 + this.B5 +this.C5 +this.D1; this.ABCD6 = this.A6 + this.B6 +this.C6 +this.D1;

    //Total Cash outflows(E+F)
    this.EF1 = this.E1 + this.F1;   this.EF2 = this.E2 + this.F2; this.EF3 = this.E3 + this.F3;;
    this.EF4 = this.E4 + this.F4;   this.EF5 = this.E5 + this.F5; this.EF6 = this.E6 + this.F6;;

    //(ii) PROFIT AND LOSS STATEMENT
       //Goods available for sale(B+C)
       this.GBC1 = this.OS1 + this.PM1;   this.GBC2 = this.OS2 + this.PM2; this.GBC3 = this.OS3 + this.PM3;
       this.GBC4 = this.OS4 + this.PM4;   this.GBC5 = this.OS5 + this.PM5; this.GBC6 = this.OS6 + this.PM6;
   
       //Cost of goods Sold(D-E)
       this.DE1 = this.GBC1 - this.CS1;   this.DE2 = this.GBC2 - this.CS2; this.DE3 = this.GBC3 - this.CS3;
       this.DE4 = this.GBC4 - this.CS4;   this.DE5 = this.GBC5 - this.CS5; this.DE6 = this.GBC6 - this.CS6;
   
       //Gross Profit(A-F)
       this.AF1 = this.MS1 - this.DE1;   this.AF2 = this.MS2 - this.DE2; this.AF3 = this.MS3 - this.DE3;
       this.AF4 = this.MS4 - this.DE4;   this.AF5 = this.MS5 - this.DE5; this.AF6 = this.MS6 - this.DE6;
   
       //Net Profit(G-H)
       this.GH1 = this.AF1 - this.OE1;   this.GH2 = this.AF2 - this.OE2; this.GH3 = this.AF3 - this.OE3;
       this.GH4 = this.AF4 - this.OE4;   this.GH5 = this.AF5 - this.OE5; this.GH6 = this.AF6 - this.OE6;
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

  nextStepTable() {
    if (this.selectedIndex1 != this.maxNumberOfTabs1) {
      this.selectedIndex1 = this.selectedIndex1 + 1;
    }
  }

  previousStepTable() {
    if (this.selectedIndex1 != 0) {
      this.selectedIndex1 = this.selectedIndex1 - 1;
    }
  }

  informChangeTable(tabIndexTable:number) {
    this.selectedIndex1 = tabIndexTable;
  }

  informChange(tabIndex:number) {
    this.selectedIndex = tabIndex;
  }

  openAppraisalPdf(TypeofBusiness,BeenInOperation,BeenInOperationTime,IsRegistered,CompanyBForm,TradeLicense,TypeofBuilding,
    Condition,OwnBuilding,BuildingOwnerName,BuildingOwnerAddress,BuildingRent,LayoutAndCleanliness,CashBook,CreditLedger,
           StockBooks,OtherBooks,OtherBooksDescription,IsBooksUpToDate,WhoKeepsBooks,IsPersonalDrawingsRecorded,HaveBusinessBank,
           BankName,BankBranch,A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,C6,ABC1,ABC2,ABC3,ABC4,ABC5,ABC6,D1,D2,D3,D4,
           D5,D6,ABCD1,ABCD2,ABCD3,ABCD4,ABCD5,ABCD6,E1,E2,E3,E4,E5,E6,F1,F2,F3,F4,F5,F6,EF1,EF2,EF3,EF4,EF5,EF6,S1,S2,S3,S4,S5,S6,MS1,MS2,MS3,MS4,MS5,MS6,
           OS1,OS2,OS3,OS4,OS5,OS6,PM1,PM2,PM3,PM4,PM5,PM6,GBC1,GBC2,GBC3,GBC4,GBC5,GBC6,CS1,CS2,CS3,CS4,CS5,CS6,DE1,DE2,DE3,DE4,DE5,DE6,AF1,AF2,AF3,AF4,AF5,AF6,
           OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
           DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
           AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,BoardRecommendations,RecommName,RecommDate){
    this.appraisalPdf.getAppraisalApplicationPDF(this.FullNames,this.IdNo,this.PinNo,this.PostalAddress,this.Email,this.Telephone, TypeofBusiness,BeenInOperation,BeenInOperationTime,IsRegistered,CompanyBForm,TradeLicense,
      TypeofBuilding,Condition,OwnBuilding,BuildingOwnerName,BuildingOwnerAddress,BuildingRent,LayoutAndCleanliness,CashBook,CreditLedger,
             StockBooks,OtherBooks,OtherBooksDescription,IsBooksUpToDate,WhoKeepsBooks,IsPersonalDrawingsRecorded,HaveBusinessBank,
             BankName,BankBranch,A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,C6,ABC1,ABC2,ABC3,ABC4,ABC5,ABC6,D1,D2,D3,D4,
             D5,D6,ABCD1,ABCD2,ABCD3,ABCD4,ABCD5,ABCD6,E1,E2,E3,E4,E5,E6,F1,F2,F3,F4,F5,F6,EF1,EF2,EF3,EF4,EF5,EF6,S1,S2,S3,S4,S5,S6,MS1,MS2,MS3,MS4,MS5,MS6,
             OS1,OS2,OS3,OS4,OS5,OS6,PM1,PM2,PM3,PM4,PM5,PM6,GBC1,GBC2,GBC3,GBC4,GBC5,GBC6,CS1,CS2,CS3,CS4,CS5,CS6,DE1,DE2,DE3,DE4,DE5,DE6,AF1,AF2,AF3,AF4,AF5,AF6,
             OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
             DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
             AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,BoardRecommendations,RecommName,RecommDate);
    }

}


