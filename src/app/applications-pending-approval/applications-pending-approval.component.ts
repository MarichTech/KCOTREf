import { LoanApplicationPdfService } from './../shared/loan-application-pdf.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppraisalPdfService } from '../shared/appraisal-pdf.service';
import { LoanApplicationService } from '../shared/loan-application.service';

@Component({
  selector: 'app-applications-pending-approval',
  templateUrl: './applications-pending-approval.component.html',
  styleUrls: ['./applications-pending-approval.component.css']
})
export class ApplicationsPendingApprovalComponent implements OnInit {

  public  AppraisalList: Object;//change to Object if using data tables
  public temp: Object=false;
  spinnerContent:any;
  UserName:any;

  isDisconnected: boolean = false;
  Today:any;
  welcomeNote:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;

  SubcountysList:[];
  WardsList:[];
  VillagesList:[];


  //Personal Particulars
  MemberId:any=0;
  passedLoanId:any=0;
  FullNames:any;
  IdNo:any;
  SubCountyPerson:any="";
  Ward:any;
  Village:any;
  WardAdministrator:any;
  VillageAdministrator:any;
  NextOfKin:any;
  Relationship:any;
  PostalAddress:any;
  Email:any;
  TelephoneNumber:any;
  LevelOfEducation:any;
  HasReceivedTraining:any="";
  TrainingDescription:any;
  BeenInBusinessLength:any;
  PaidEmployment:any;
  UserEmployer:any;
  IsPysicallyDisabled:any="";
  PysicallyDisabledDescription:any="";
  OtherSourcesOfIncome:any;

  BeenInBusiness:any;
  BeenInBusinessTime:any;

  BeenInOperation:any;
  BeenInOperationTime:any;
  Constituencies:any;
  Constituency:any;

  StationId:any=0;
  DepartmentId:any=0;
  EmployerId:any=0;
  IsComplete:boolean=false;

   //Business Details
   BusinessDetailsId:any="";
   BusinessName:any="";
   PhysicalAddress:any="";
   PlotNumber:any="";
   MarketOrRoad:any="";
   Subcounty:any="";
   LegalStatus:any="";
   FormOfBusiness:any="";
   Partners:any="";
   NatureOfBusiness:any="";
   OperationTime:any="";
   NoOfEmployees:any="";
   SalePerMonth:any=0;
   formatedSalePerMonth:any;
   ExpensesPerMonth:any=0;
   formatedExpensesPerMonth:any;
   MonthProfit:any=0;
   formatedMonthProfit:any;
   SaleAbleStock:any=0;
   formatedSaleAbleStock:any;
   OwnBuilding:any="";
   BuildingAddress:any="";
   BuildingOwner:any="";
   MonthRent:any=0;
   formatedMonthRent:any;
   BookofAccount:any="";
   PersonalBooks:any="";
   BusinessBank:any="";
   BankName:any="";
   BankBranch:any="";
   BankAccountNo:any="";
   PrivateDebts:any=0;
   formatedPrivateDebts:any=0;
   BusinessDebts:any=0;
   formatedBusinessDebts:any=0;
   TotalDebts:any=0;
   formatedTotalDebts:any;
   BusinessLicence:any;
   ContactPerson:any;
   ContactPersonPosition:any;

    //Loan
  loanAmount:any=0;
  formattedAmount:any="";
  loanSecurity:any="";
  collateralType:any="";
  loanpurpose:any="";
  collateral: any='Third Party Collateral';
  Yes:any='Yes';
  haveAppliedLoan:any="";
  AppliedLoanCreditor:any="";
  gurantor1Name:any="";
  gurantor1Address:any="";
  gurantor1IdNo:any="";
  gurantor1Email:any="";
  gurantor1Telephone:any;
  gurantor2Name:any="";
  gurantor2Address:any="";
  gurantor2IdNo:any="";
  gurantor2Email:any="";
  gurantor2Telephone:any="";
  BusinessLength:any="";
 






  constructor(public service : LoanApplicationService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar, private appraisalPdf:AppraisalPdfService, private pdfService: LoanApplicationPdfService) { 
    this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';

      this.service.getSubCountysList().subscribe(res=>{
        this.SubcountysList=res as [];
      });

      this.service.getWardsList().subscribe(res=>{
        this.WardsList=res as [];
      });

      this.service.getVillagesList().subscribe(res=>{
        this.VillagesList=res as [];
      });
    }

  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
    this.getData();
    this.AppraisalList=[];
  }

  openSnackBar(message){
    this._snackBar.open(message, 'Ok',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    });
  }


  getData(){
    this.spinnerContent='Loading List....';
    this.spinner.show();
    this.service.getAppraisalList().subscribe(Response => {
      this.spinner.hide();
      this.AppraisalList = Response;
      this.temp = true;
    },(error)=>{
      this.spinner.hide();
      this.isDisconnected=true;
    });
  }
  
  onAppraiseApplication(NatId,LoanId){
    localStorage.setItem('UserAppraisalNatIdNo', NatId.toString());
    localStorage.setItem('UserAppraisalLoanId', LoanId.toString());
    console.log('NationalId:'+NatId);
    this.router.navigate(['/Loan-Appraisal']);
  
  }

  onView(){
   
  
  }


  Reload(){
    window.location.reload();
    
  }

  viewLoanApplication(NatId, LoanId){
    this.IdNo = NatId;
    this.passedLoanId = LoanId;
    console.log(NatId);
    this.getLoanApplicationDetails();

  }

  viewLoanAppraisal(){
    
  }


    getSubCounty(id: any) : string {
      var name: string;
      if(this.SubcountysList){
      if(id>0){
      this.SubcountysList.some((obj)=>{
        //var dim=obj as Element;
        if(obj["EmpoyerId"]==id){
          name=obj["SubcopuntyName"];
          return true;
        }
      })}}
      return name;
    }


    getWards(id: any) : string {
      var name: string;
      if(this.WardsList){
      if(id>0){
      this.WardsList.some((obj)=>{
        //var dim=obj as Element;
        if(obj["WardId"]==id){
          name=obj["WardName"];
          return true;
        }
      })}}
      return name;
    }


    getVillages(id: any) : string {
      var name: string;
      if(this.VillagesList){
      if(id>0){
      this.VillagesList.some((obj)=>{
        //var dim=obj as Element;
        if(obj["VillageId"]==id){
          name=obj["VillageName"];
          return true;
        }
      })}}
      return name;
    }


    getLoanApplicationDetails(){
      this.spinnerContent='Generating PDF....';
    this.spinner.show();

       //if(window.localStorage.getItem('OpenPdf') == 'True'){this.generatePdf();}
  
  this.service.getUserDetails(parseInt(this.IdNo)).subscribe(Response =>{
        
        this.MemberId=Response.member.memberid;
        console.log(this.MemberId);
        this.FullNames=Response.member.mfirstname +' '+Response.member.msurname +' '+ Response.member.mothername;
        this.IdNo=Response.member.IDNO;
        this.StationId = Response.member.stationid;
        this.DepartmentId = Response.member.deptid;
        this.EmployerId = Response.member.employerid;
        this.PostalAddress=Response.member.mpostaladdress;
        this.Email=Response.member.memail;
        this.TelephoneNumber=Response.member.mcell;
        this.LevelOfEducation=Response.member.LevelOfEducation;
        
       
        if(this.EmployerId != 0){
          this.getSubCountyDetails(this.EmployerId);
        }

        
      });
    }

    getWardDetails(id: any){
      this.service.getWard(parseInt(id)).subscribe(Response =>{
        this.Ward=Response.ward.stationname;
        this.WardAdministrator=Response.ward.StationAddress; 
        if(this.DepartmentId != 0){
          console.log('d'+this.DepartmentId);
          this.getVillageDetails(this.DepartmentId);
        }
        
    })
    }
    
    getSubCountyDetails(id: any){
      this.service.getSubcounty(parseInt(id)).subscribe(Response =>{
        this.SubCountyPerson=Response.subcounty.Employername;
        if(this.StationId != 0){
          console.log('s'+this.StationId);
          this.getWardDetails(this.StationId);
        }
        
    })
    }
    
    getVillageDetails(id: any){
      this.service.getVillage(parseInt(id)).subscribe(Response =>{
        this.Village=Response.village.DepartmentName;
        this.VillageAdministrator=Response.village.Remarks;
        if(this.MemberId != 0){
          console.log('mem'+this.MemberId);
          this.getBusinessDetails(this.MemberId);
        }
    })
    }
    
    getBusinessDetails(id: any){
      this.service.getBusinessDetailsById(parseInt(id)).subscribe(Response =>{
        this.BusinessName=Response.businessDetails.BusinessName;
        this.FormOfBusiness=Response.businessDetails.FormOfBusiness;
        this.PhysicalAddress=Response.businessDetails.PhysicalAddress;
        this.NatureOfBusiness=Response.businessDetails.BusinessType;
        this.LegalStatus=Response.businessDetails.LegalStatus;
       
        
       if(this.passedLoanId != 0 ){
        console.log('mem'+this.MemberId);
        this.getUserApplicationFormDetails(this.passedLoanId);
       }
        
    })
    }

    generatePdf() {
      this.spinner.hide();
      this.pdfService.getLoanApplicationPDF(this.FullNames,this.IdNo,this.SubCountyPerson,this.Ward,this.Village,
        this.WardAdministrator,this.VillageAdministrator,this.NextOfKin,this.Relationship,
        this.PostalAddress,this.Email,this.TelephoneNumber,this.LevelOfEducation,
        this.HasReceivedTraining,this.TrainingDescription,this.BeenInBusiness,this.BeenInBusinessTime,this.PaidEmployment,
        this.IsPysicallyDisabled,this.PysicallyDisabledDescription,this.OtherSourcesOfIncome,
        this.BusinessName,this.PhysicalAddress,this.LegalStatus,this.FormOfBusiness,
        this.Partners,this.NatureOfBusiness,this.BeenInOperation,this.BeenInOperationTime,
        this.NoOfEmployees,this.SalePerMonth,this.ExpensesPerMonth,this.MonthProfit,this.SaleAbleStock,
        this.OwnBuilding,this.BuildingOwner,this.BuildingAddress,this.MonthRent,this.BookofAccount,
        this.PersonalBooks,this.BusinessBank,this.BankName,this.BankBranch,this.BankAccountNo,this.PrivateDebts,
        this.BusinessDebts,this.loanAmount,this.loanpurpose,this.loanSecurity,this.haveAppliedLoan,
        this.gurantor1Name,this.gurantor1Address,this.gurantor1IdNo,this.gurantor1Email,this.gurantor1Telephone,
        this.gurantor2Name,this.gurantor2Address,this.gurantor2IdNo,this.gurantor2Email,this.gurantor2Telephone); 
    }

    getUserApplicationFormDetails(passedLoanId){
  
      this.service.getApplicationDetailsById(passedLoanId).subscribe(Response =>{
        if(Response.loan.memberid != 0){this.MemberId=Response.loan.memberid;}
    if(Response.loan.NextofKen != "null"){this.NextOfKin=Response.loan.NextofKen;}
    if(Response.loan.KinRelationship != "null"){this.Relationship=Response.loan.KinRelationship; }
    if(Response.loan.BusinessTraining != "null"){this.HasReceivedTraining=Response.loan.BusinessTraining; }
    if(Response.loan.BusinessTrainingD != "null"){this.TrainingDescription=Response.loan.BusinessTrainingD;}
    if(Response.loan.BusinessPeriod != "null"){this.BeenInBusiness=Response.loan.BusinessPeriod;}
    if(Response.loan.BusinessPeriod != "null"){this.BusinessLength=Response.loan.BusinessPeriod;}
    if(Response.loan.PaidEmployement != "null"){this.PaidEmployment=Response.loan.PaidEmployement; }
    if(Response.loan.PaidEmployementD != "null"){this.UserEmployer=Response.loan.PaidEmployementD; }
    if(Response.loan.Disability != "null"){ this.IsPysicallyDisabled=Response.loan.Disability; }
    if(Response.loan.DisabilityD != "null"){this.PysicallyDisabledDescription=Response.loan.DisabilityD; }
    if(Response.loan.SourceofIncome != "null"){this.OtherSourcesOfIncome=Response.loan.SourceofIncome; }
    if(Response.loan.BusinessLicences != "null"){this.BusinessLicence=Response.loan.BusinessLicences; }
    if(Response.loan.PloatNumber != "null"){this.PlotNumber=Response.loan.PloatNumber; }
    if(Response.loan.MarketRoad != "null"){this.MarketOrRoad=Response.loan.MarketRoad; }
    if(Response.loan.SubCounty != "null"){this.Subcounty=Response.loan.SubCounty; }
    if(Response.loan.Partners != "null"){this.Partners=Response.loan.Partners; }
    if(Response.loan.BusinessOperation != "null"){this.BeenInOperation=Response.loan.BusinessOperation;}
    if(Response.loan.BusinessOperation != "null"){this.BeenInOperationTime=Response.loan.BusinessOperation; }
    if(Response.loan.NoOfEmployee != "null"){this.NoOfEmployees=Response.loan.NoOfEmployee; }
    if(Response.loan.OwnBusinessBuiding != "null"){this.OwnBuilding=Response.loan.OwnBusinessBuiding; }
    if(Response.loan.BOwnerName != "null"){this.BuildingOwner=Response.loan.BOwnerName; }
    if(Response.loan.BOwenerAddress != "null"){this.BuildingAddress=Response.loan.BOwenerAddress; }
    if(Response.loan.BMonthRent != "null"){this.MonthRent=Response.loan.BMonthRent; }
    if(Response.loan.AverageSales != "null"){this.SalePerMonth=Response.loan.AverageSales; }
    if(Response.loan.AverageExpenses != "null"){this.ExpensesPerMonth=Response.loan.AverageExpenses; }
    if(Response.loan.BMonthlyProfit != "null"){this.MonthProfit=Response.loan.BMonthlyProfit; }
    if(Response.loan.saleAbleStock != "null"){this.SaleAbleStock=Response.loan.saleAbleStock; }
    if(Response.loan.BooksOfAccount != "null"){this.BookofAccount=Response.loan.BooksOfAccount;} 
    if(Response.loan.KeepingBooksOfAccount != "null"){this.PersonalBooks=Response.loan.KeepingBooksOfAccount; }
    if(Response.loan.BBankAccount != "null"){this.BusinessBank=Response.loan.BBankAccount;} 
    if(Response.loan.BankName != "null"){this.BankName=Response.loan.BankName; }
    if(Response.loan.BankBranch != "null"){this.BankBranch=Response.loan.BankBranch;} 
    if(Response.loan.AccountNumber != "null"){this.BankAccountNo=Response.loan.AccountNumber; }
    if(Response.loan.PrivateDebts != "null"){this.PrivateDebts=Response.loan.PrivateDebts; }
    if(Response.loan.BusinessDebts != "null"){this.BusinessDebts=Response.loan.BusinessDebts;} 
    if(Response.loan.loanamount != "null"){this.loanAmount=Response.loan.loanamount;} 
    if(Response.loan.LoanPurposes != "null"){this.loanpurpose=Response.loan.LoanPurposes; }
    if(Response.loan.CreditorName != "null"){this.AppliedLoanCreditor=Response.loan.CreditorName; }
    if(Response.loan.Collateral != "null"){this.collateralType=Response.loan.Collateral; }
    if(Response.loan.GOneName != "null"){this.gurantor1Name=Response.loan.GOneName; }
    if(Response.loan.GOneAddress != "null"){this.gurantor1Address=Response.loan.GOneAddress; }
    if(Response.loan.GOneEmail != "null"){this.gurantor1Email=Response.loan.GOneEmail; }
    if(Response.loan.GOnePhone != "null"){this.gurantor1Telephone=Response.loan.GOnePhone; }
    if(Response.loan.GOneIdNo != "null"){this.gurantor1IdNo=Response.loan.GOneIdNo;}
    if(Response.loan.GTwoName != "null"){this.gurantor2Name=Response.loan.GTwoName; }
    if(Response.loan.GTwoAddress != "null"){this.gurantor2Address=Response.loan.GTwoAddress; }
    if(Response.loan.GTwoEmail != "null"){this.gurantor2Email=Response.loan.GTwoEmail; }
    if(Response.loan.GTwoPhone != "null"){this.gurantor2Telephone=Response.loan.GTwoPhone;}
    if(Response.loan.GTwoIdNo != "null"){this.gurantor2IdNo=Response.loan.GTwoIdNo;}
    
        this.generatePdf();
       
    });
    }

    approveLoan(FirstName,Surname,OtherNames,LoanAmout){
      if(confirm('You are about to Approve '+FirstName+' '+Surname+' '+OtherNames+' Loan of Ksh'+LoanAmout+'. Press Ok to Approve.')){

      }
    }

    rejectLoan(FirstName,Surname,OtherNames,LoanAmout){
      if(confirm('You are about to Reject '+FirstName+' '+Surname+' '+OtherNames+' Loan of Ksh'+LoanAmout+'. Press Ok to Reject.')){
        
      }
    }
  

}


