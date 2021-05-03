import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppraisalPdfService } from '../shared/appraisal-pdf.service';
import { LoanApplicationPdfService } from '../shared/loan-application-pdf.service';
import { LoanApplicationService } from '../shared/loan-application.service';

@Component({
  selector: 'app-applications-pending-disbursement',
  templateUrl: './applications-pending-disbursement.component.html',
  styleUrls: ['./applications-pending-disbursement.component.css']
})
export class ApplicationsPendingDisbursementComponent implements OnInit {

  public  ApprovalList: Object;//change to Object if using data tables
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




  //Appraisal Variables

  //Personal Details
  //FullNames:any="";
  //IdNo:any="";
  PinNo:any="";
  //PostalAddress:any="";
  //Email:any="";
  Telephone:any="";

  //Business Details
  TypeofBusiness:any="";
  //BeenInOperation:any="";
  //BeenInOperationTime:any="";
  BeenInOperationEdit:any="";
  IsRegistered:any="";
  CompanyBForm:any="";
  TradeLicense:any="";

  //Business premises
  TypeofBuilding:any="";
  Condition:any="";
  //OwnBuilding:any="";
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
  //BankName:any="";
  //BankBranch:any="";
  //BankAccountNo:any="";

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


  LoanId: any=0;
  Id: any=0;
 




  constructor(public service : LoanApplicationService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar, private pdfService: LoanApplicationPdfService, private appraisalPdf:AppraisalPdfService, private loanservice:LoanApplicationService) { 
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
    this.ApprovalList=[];
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
    this.service.getApprovalList().subscribe(Response => {
      this.spinner.hide();
      this.ApprovalList = Response;
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
    this.spinnerContent='Generating PDF....';
    this.spinner.show();
    this.IdNo = NatId;
    this.passedLoanId = LoanId;
    console.log(NatId);
    this.service.getUserDetails(parseInt(NatId)).subscribe(Response =>{
        
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

  viewLoanAppraisal(NatId, LoanId){
    this.IdNo = NatId;
    this.passedLoanId = LoanId;
    console.log(NatId);
    this.getAppraisalDetails(LoanId);
    
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
  
  
       this.getUserDetails();
    }

    getUserDetails(){
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
        this.Telephone=Response.member.mcell;
        this.PinNo=Response.member.personalKRA;
        this.LevelOfEducation=Response.member.LevelOfEducation;
        
      
        
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

  

   getAppraisalDetails(passedLoanId){
    this.spinnerContent='Generating PDF....';
    this.spinner.show();
    this.getUserDetails();

    //Part 1
    this.loanservice.getAppraisalDetailsByLoanId1(passedLoanId).subscribe(Response =>{

      if(Response.loanAppraisal.Id != 0){this.Id=Response.loanAppraisal.Id;}
      if(Response.loanAppraisal.MemberId != "null"){this.MemberId=Response.loanAppraisal.MemberId;}
      if(Response.loanAppraisal.LoanId != "null"){this.LoanId=Response.loanAppraisal.LoanId;}
      if(Response.loanAppraisal.Typeofbusiness != "null"){this.TypeofBusiness=Response.loanAppraisal.Typeofbusiness;}
      if(Response.loanAppraisal.BusinessExistencePeriod != "null"){this.BeenInOperationEdit=Response.loanAppraisal.BusinessExistencePeriod;}
      if(Response.loanAppraisal.FormOfBusiness != "null"){this.CompanyBForm=Response.loanAppraisal.FormOfBusiness;}
      if(Response.loanAppraisal.IsRegistered != "null"){this.IsRegistered=Response.loanAppraisal.IsRegistered;}
      if(Response.loanAppraisal.TradeLicenseNumber != "null"){this.TradeLicense=Response.loanAppraisal.TradeLicenseNumber;}
      if(Response.loanAppraisal.PremiseTypeofBuilding != "null"){this.TypeofBuilding=Response.loanAppraisal.PremiseTypeofBuilding;}
      if(Response.loanAppraisal.PremiseCondition != "null"){this.Condition=Response.loanAppraisal.PremiseCondition;}
      if(Response.loanAppraisal.LandLordName != "null"){this.BuildingOwnerName=Response.loanAppraisal.LandLordName;}
      if(Response.loanAppraisal.PremiseOwnership != "null"){this.OwnBuilding=Response.loanAppraisal.PremiseOwnership;}
      if(Response.loanAppraisal.BooksKeeper != "null"){this.WhoKeepsBooks=Response.loanAppraisal.BooksKeeper;}
      if(Response.loanAppraisal.IsPersonalDrawingsRecorded != "null"){this.IsPersonalDrawingsRecorded=Response.loanAppraisal.IsPersonalDrawingsRecorded;}
      if(Response.loanAppraisal.BankAccountName != "null"){this.BankName=Response.loanAppraisal.BankAccountName;}
      if(Response.loanAppraisal.BankAccountBranch != "null"){this.BankBranch=Response.loanAppraisal.BankAccountBranch;}
      if(Response.loanAppraisal.CashInBankSOM1st != "null"){this.A1=Response.loanAppraisal.CashInBankSOM1st;}
      if(Response.loanAppraisal.CashInBankSOM2nd != "null"){this.A2=Response.loanAppraisal.CashInBankSOM2nd;}
      if(Response.loanAppraisal.CashInBankSOM3rd != "null"){this.A3=Response.loanAppraisal.CashInBankSOM3rd;}
      if(Response.loanAppraisal.CashInBankSOM4th!= "null"){this.A4=Response.loanAppraisal.CashInBankSOM4th;}
      if(Response.loanAppraisal.CashInBankSOM5th != "null"){this.A5=Response.loanAppraisal.CashInBankSOM5th;}
      if(Response.loanAppraisal.CashInBankSOM6th != "null"){this.A6=Response.loanAppraisal.CashInBankSOM6th;}
      if(Response.loanAppraisal.CashInHandSOM1st != "null"){this.B1=Response.loanAppraisal.CashInHandSOM1st;}
      if(Response.loanAppraisal.CashInHandSOM2nd != "null"){this.B3=Response.loanAppraisal.CashInHandSOM2nd;}
      if(Response.loanAppraisal.CashInHandSOM3rd != "null"){this.B3=Response.loanAppraisal.CashInHandSOM3rd;}
      if(Response.loanAppraisal.CashInHandSOM4th != "null"){this.B4=Response.loanAppraisal.CashInHandSOM4th;}
      if(Response.loanAppraisal.CashInHandSOM5th != "null"){this.B5=Response.loanAppraisal.CashInHandSOM5th;}
      if(Response.loanAppraisal.CashInHandSOM6th != "null"){this.B6=Response.loanAppraisal.CashInHandSOM6th;}
      if(Response.loanAppraisal.CashSales1st != "null"){this.C1=Response.loanAppraisal.CashSales1st;}
      if(Response.loanAppraisal.CashSales2nd != "null"){this.C2=Response.loanAppraisal.CashSales2nd;}
      if(Response.loanAppraisal.CashSales3rd != "null"){this.C3=Response.loanAppraisal.CashSales3rd;}
      if(Response.loanAppraisal.CashSales4th != "null"){this.C4=Response.loanAppraisal.CashSales4th;}
      if(Response.loanAppraisal.CashSales5th != "null"){this.C5=Response.loanAppraisal.CashSales5th;}
      if(Response.loanAppraisal.CashSales6th != "null"){this.C6=Response.loanAppraisal.CashSales6th;}
      if(Response.loanAppraisal.OtherMoniesExp1st != "null"){this.D1=Response.loanAppraisal.OtherMoniesExp1st;}
      if(Response.loanAppraisal.OtherMoniesExp2nd != "null"){this.D2=Response.loanAppraisal.OtherMoniesExp2nd;}
      if(Response.loanAppraisal.OtherMoniesExp3rd != "null"){this.D3=Response.loanAppraisal.OtherMoniesExp3rd;}
      if(Response.loanAppraisal.OtherMoniesExp4th != "null"){this.D4=Response.loanAppraisal.OtherMoniesExp4th;}
      if(Response.loanAppraisal.OtherMoniesExp5th != "null"){this.D5=Response.loanAppraisal.OtherMoniesExp5th;}
      if(Response.loanAppraisal.OtherMoniesExp6th != "null"){this.D6=Response.loanAppraisal.OtherMoniesExp6th;}
      if(Response.loanAppraisal.CashPurchases1st != "null"){this.E1=Response.loanAppraisal.CashPurchases1st;}
      if(Response.loanAppraisal.CashPurchases2nd != "null"){this.E2=Response.loanAppraisal.CashPurchases2nd;}
      if(Response.loanAppraisal.CashPurchases3rd != "null"){this.E3=Response.loanAppraisal.CashPurchases3rd;}
      if(Response.loanAppraisal.CashPurchases4th != "null"){this.E4=Response.loanAppraisal.CashPurchases4th;}
      if(Response.loanAppraisal.CashPurchases5th != "null"){this.E5=Response.loanAppraisal.CashPurchases5th;}
      if(Response.loanAppraisal.CashPurchases6th != "null"){this.E6=Response.loanAppraisal.CashPurchases6th;}
      if(Response.loanAppraisal.CashPayments1st != "null"){this.F1=Response.loanAppraisal.CashPayments1st;}
      if(Response.loanAppraisal.CashPayments2nd != "null"){this.F2=Response.loanAppraisal.CashPayments2nd;}
      if(Response.loanAppraisal.CashPayments3rd != "null"){this.F3=Response.loanAppraisal.CashPayments3rd;}
      if(Response.loanAppraisal.CashPayments4th != "null"){this.F4=Response.loanAppraisal.CashPayments4th;}
      if(Response.loanAppraisal.CashPayments5th != "null"){this.F5=Response.loanAppraisal.CashPayments5th;}
      if(Response.loanAppraisal.CashPayments6th != "null"){this.F6=Response.loanAppraisal.CashPayments6th;}
      if(Response.loanAppraisal.MonthlySales1st != "null"){this.MS1=Response.loanAppraisal.MonthlySales1st;}
      if(Response.loanAppraisal.MonthlySales2nd != "null"){this.MS2=Response.loanAppraisal.MonthlySales2nd;}
      if(Response.loanAppraisal.MonthlySales3rd != "null"){this.MS3=Response.loanAppraisal.MonthlySales3rd;}
      if(Response.loanAppraisal.MonthlySales4th != "null"){this.MS4=Response.loanAppraisal.MonthlySales4th;}
      if(Response.loanAppraisal.MonthlySales5th != "null"){this.MS5=Response.loanAppraisal.MonthlySales5th;}
      if(Response.loanAppraisal.MonthlySales6th != "null"){this.MS6=Response.loanAppraisal.MonthlySales6th;}
      if(Response.loanAppraisal.OpeningStock1st != "null"){this.OS1=Response.loanAppraisal.OpeningStock1st;}
      if(Response.loanAppraisal.OpeningStock2nd != "null"){this.OS2=Response.loanAppraisal.OpeningStock2nd;}
      if(Response.loanAppraisal.OpeningStock3rd != "null"){this.OS3=Response.loanAppraisal.OpeningStock3rd;}
      if(Response.loanAppraisal.OpeningStock4th != "null"){this.OS4=Response.loanAppraisal.OpeningStock4th;}
      if(Response.loanAppraisal.OpeningStock5th != "null"){this.OS5=Response.loanAppraisal.OpeningStock5th;}
      if(Response.loanAppraisal.OpeningStock6th != "null"){this.OS6=Response.loanAppraisal.OpeningStock6th;}
      if(Response.loanAppraisal.PurchasesThatMonth1st!= "null"){this.PM1=Response.loanAppraisal.PurchasesThatMonth1st;}
      if(Response.loanAppraisal.PurchasesThatMonth2nd != "null"){this.PM2=Response.loanAppraisal.PurchasesThatMonth2nd;}
      if(Response.loanAppraisal.PurchasesThatMonth3rd != "null"){this.PM3=Response.loanAppraisal.PurchasesThatMonth3rd;}
      if(Response.loanAppraisal.PurchasesThatMonth4th != "null"){this.PM4=Response.loanAppraisal.PurchasesThatMonth4th;}
      if(Response.loanAppraisal.PurchasesThatMonth5th != "null"){this.PM5=Response.loanAppraisal.PurchasesThatMonth5th;}
      if(Response.loanAppraisal.PurchasesThatMonth6th != "null"){this.PM6=Response.loanAppraisal.PurchasesThatMonth6th;}
      if(Response.loanAppraisal.GoodsAvailableForSale1st != "null"){this.GBC1=Response.loanAppraisal.GoodsAvailableForSale1st;}
      if(Response.loanAppraisal.GoodsAvailableForSale2nd != "null"){this.GBC2=Response.loanAppraisal.GoodsAvailableForSale2nd;}
      if(Response.loanAppraisal.GoodsAvailableForSale3rd != "null"){this.GBC3=Response.loanAppraisal.GoodsAvailableForSale3rd;}
      if(Response.loanAppraisal.GoodsAvailableForSale4th != "null"){this.GBC4=Response.loanAppraisal.GoodsAvailableForSale4th;}
      if(Response.loanAppraisal.GoodsAvailableForSale5th != "null"){this.GBC5=Response.loanAppraisal.GoodsAvailableForSale5th;}
      if(Response.loanAppraisal.GoodsAvailableForSale6th != "null"){this.GBC6=Response.loanAppraisal.GoodsAvailableForSale6th;}


      //Part2
      this.getAppraisalDetails2(passedLoanId);
    })


  

   }

   getAppraisalDetails2(passedLoanId){
  //Part 2
  this.loanservice.getAppraisalDetailsByLoanId2(passedLoanId).subscribe(Response =>{

    if(Response.loanOtherAppraisal.Id != "null"){this.Id=Response.loanOtherAppraisal.Id;}
    if(Response.loanOtherAppraisal.LoanId != "null"){this.LoanId=Response.loanOtherAppraisal.LoanId;}
    if(Response.loanOtherAppraisal.ClosingStock1st!= "null"){this.CS1=Response.loanOtherAppraisal.ClosingStock1st;}
    if(Response.loanOtherAppraisal.ClosingStock2nd != "null"){this.CS2=Response.loanOtherAppraisal.ClosingStock2nd;}
    if(Response.loanOtherAppraisal.ClosingStock3rd != "null"){this.CS3=Response.loanOtherAppraisal.ClosingStock3rd;}
    if(Response.loanOtherAppraisal.ClosingStock4th != "null"){this.CS4=Response.loanOtherAppraisal.ClosingStock4th;}
    if(Response.loanOtherAppraisal.ClosingStock5th!= "null"){this.CS5=Response.loanOtherAppraisal.ClosingStock5th;}
    if(Response.loanOtherAppraisal.ClosingStock6th != "null"){this.CS6=Response.loanOtherAppraisal.ClosingStock6th;}
    if(Response.loanOtherAppraisal.CostOfGoodsSold1st != "null"){this.DE1=Response.loanOtherAppraisal.CostOfGoodsSold1st;}
    if(Response.loanOtherAppraisal.CostOfGoodsSold2nd != "null"){this.DE2=Response.loanOtherAppraisal.CostOfGoodsSold2nd;}
    if(Response.loanOtherAppraisal.CostOfGoodsSold3rd != "null"){this.DE3=Response.loanOtherAppraisal.CostOfGoodsSold3rd;}
    if(Response.loanOtherAppraisal.CostOfGoodsSold4th != "null"){this.DE4=Response.loanOtherAppraisal.CostOfGoodsSold4th;}
    if(Response.loanOtherAppraisal.CostOfGoodsSold5th != "null"){this.DE5=Response.loanOtherAppraisal.CostOfGoodsSold5th;}
    if(Response.loanOtherAppraisal.CostOfGoodsSold6th != "null"){this.DE6=Response.loanOtherAppraisal.CostOfGoodsSold6th;}
    if(Response.loanOtherAppraisal.GrossProfit1st != "null"){this.AF1=Response.loanOtherAppraisal.GrossProfit1st;}
    if(Response.loanOtherAppraisal.GrossProfit2nd != "null"){this.AF2=Response.loanOtherAppraisal.GrossProfit2nd;}
    if(Response.loanOtherAppraisal.GrossProfit3rd != "null"){this.AF3=Response.loanOtherAppraisal.GrossProfit3rd;}
    if(Response.loanOtherAppraisal.GrossProfit4th != "null"){this.AF4=Response.loanOtherAppraisal.GrossProfit4th;}
    if(Response.loanOtherAppraisal.GrossProfit5th != "null"){this.AF5=Response.loanOtherAppraisal.GrossProfit5th;}
    if(Response.loanOtherAppraisal.GrossProfit6th != "null"){this.AF6=Response.loanOtherAppraisal.GrossProfit6th;}
    if(Response.loanOtherAppraisal.OperatingExpenses1st != "null"){this.OE1=Response.loanOtherAppraisal.OperatingExpenses1st;}
    if(Response.loanOtherAppraisal.OperatingExpenses2nd != "null"){this.OE2=Response.loanOtherAppraisal.OperatingExpenses2nd;}
    if(Response.loanOtherAppraisal.OperatingExpenses3rd != "null"){this.OE3=Response.loanOtherAppraisal.OperatingExpenses3rd;}
    if(Response.loanOtherAppraisal.OperatingExpenses4th != "null"){this.OE4=Response.loanOtherAppraisal.OperatingExpenses4th;}
    if(Response.loanOtherAppraisal.OperatingExpenses5th != "null"){this.OE5=Response.loanOtherAppraisal.OperatingExpenses5th;}
    if(Response.loanOtherAppraisal.OperatingExpenses6th != "null"){this.OE6=Response.loanOtherAppraisal.OperatingExpenses6th;}
    if(Response.loanOtherAppraisal.NetProfit1st != "null"){this.GH1=Response.loanOtherAppraisal.NetProfit1st;}
    if(Response.loanOtherAppraisal.NetProfit2nd != "null"){this.GH2=Response.loanOtherAppraisal.NetProfit2nd;}
    if(Response.loanOtherAppraisal.NetProfit3rd != "null"){this.GH3=Response.loanOtherAppraisal.NetProfit3rd;}
    if(Response.loanOtherAppraisal.NetProfit4th != "null"){this.GH4=Response.loanOtherAppraisal.NetProfit4th;}
    if(Response.loanOtherAppraisal.NetProfit5th != "null"){this.GH5=Response.loanOtherAppraisal.NetProfit5th;}
    if(Response.loanOtherAppraisal.NetProfit6th != "null"){this.GH6=Response.loanOtherAppraisal.NetProfit6th;}
    if(Response.loanOtherAppraisal.Typeofsecurity != "null"){this.SecurityType=Response.loanOtherAppraisal.Typeofsecurity;}
    if(Response.loanOtherAppraisal.ApprxSecurityValue != "null"){this.ApproximateValOfSecurity=Response.loanOtherAppraisal.ApprxSecurityValue;}
    if(Response.loanOtherAppraisal.SecurityAdequacy != "null"){this.AdequacyofSecurity=Response.loanOtherAppraisal.SecurityAdequacy;}
    if(Response.loanOtherAppraisal.BCompetitors != "null"){this.Competitors=Response.loanOtherAppraisal.BCompetitors;}
    if(Response.loanOtherAppraisal.BGeneralSafety != "null"){this.GeneralSafety=Response.loanOtherAppraisal.BGeneralSafety;}
    if(Response.loanOtherAppraisal.BRegulations != "null"){this.Regulations=Response.loanOtherAppraisal.BRegulations;}
    if(Response.loanOtherAppraisal.BTechnology != "null"){this.TechnologyUsed=Response.loanOtherAppraisal.BTechnology;}
    if(Response.loanOtherAppraisal.DateOfVisits != "null"){this.DateofVisit=Response.loanOtherAppraisal.DateOfVisits;}
    if(Response.loanOtherAppraisal.SSPurpose != "null"){this.PurposeActualScore=Response.loanOtherAppraisal.SSPurpose;}
    if(Response.loanOtherAppraisal.SSPurposeRemarks != "null"){this.PurposeRemarks=Response.loanOtherAppraisal.SSPurposeRemarks;}
    if(Response.loanOtherAppraisal.SSCharacter != "null"){this.CharacterActualScore=Response.loanOtherAppraisal.SSCharacter;}
    if(Response.loanOtherAppraisal.SSCharacterRemarks != "null"){this.CharacterRemarks=Response.loanOtherAppraisal.SSCharacterRemarks;}
    if(Response.loanOtherAppraisal.SSSecurity != "null"){this.SecurityActualScore=Response.loanOtherAppraisal.SSSecurity;}
    if(Response.loanOtherAppraisal.SSSecurityRemarks != "null"){this.SecurityRemarks=Response.loanOtherAppraisal.SSSecurityRemarks;}
    if(Response.loanOtherAppraisal.SSAbility != "null"){this.AbilityActualScore=Response.loanOtherAppraisal.SSAbility;}
    if(Response.loanOtherAppraisal.SSAbilityRemarks != "null"){this.AbilityRemarks=Response.loanOtherAppraisal.SSAbilityRemarks;}
    if(Response.loanOtherAppraisal.SSAmount != "null"){this.AmountActualScore=Response.loanOtherAppraisal.SSAmount;}
    if(Response.loanOtherAppraisal.SSAmountRemarks != "null"){this.AmountRemarks=Response.loanOtherAppraisal.SSAmountRemarks;}
    if(Response.loanOtherAppraisal.SSTotal != "null"){this.TotalActualScore=Response.loanOtherAppraisal.SSTotal;}
    if(Response.loanOtherAppraisal.SSTotalRemarks != "null"){this.TotalRemarks=Response.loanOtherAppraisal.SSTotalRemarks;}
    if(Response.loanOtherAppraisal.BoardRecommendations != "null"){this.BoardRecommendations=Response.loanOtherAppraisal.BoardRecommendations;}
    if(Response.loanOtherAppraisal.RecommDate != "null"){this.RecommDate=Response.loanOtherAppraisal.RecommDate;}
    
    if(Response.loanOtherAppraisal.LandLordAddress != "null"){this.BuildingOwnerAddress=Response.loanOtherAppraisal.LandLordAddress;}
    if(Response.loanOtherAppraisal.PremiseRent != "null"){this.BuildingRent=Response.loanOtherAppraisal.PremiseRent;}
    if(Response.loanOtherAppraisal.PremiseLayoutAndCleanliness != "null"){this.LayoutAndCleanliness=Response.loanOtherAppraisal.PremiseLayoutAndCleanliness;}
    if(Response.loanOtherAppraisal.TypeOfBooks != "null"){this.CashBook=Response.loanOtherAppraisal.TypeOfBooks;}
    if(Response.loanOtherAppraisal.IsBooksUptoDate != "null"){this.IsBooksUpToDate=Response.loanOtherAppraisal.IsBooksUptoDate;}
    if(Response.loanOtherAppraisal.CreditLedger != "null"){this.CreditLedger=Response.loanOtherAppraisal.CreditLedger;}
    if(Response.loanOtherAppraisal.StockBooks != "null"){this.StockBooks=Response.loanOtherAppraisal.StockBooks;}
    if(Response.loanOtherAppraisal.OtherBooks != "null"){this.OtherBooks=Response.loanOtherAppraisal.OtherBooks;}
    if(Response.loanOtherAppraisal.OtherBooksDescription != "null"){this.OtherBooksDescription=Response.loanOtherAppraisal.OtherBooksDescription;}
    if(Response.loanOtherAppraisal.HaveBusinessBank != "null"){this.HaveBusinessBank=Response.loanOtherAppraisal.HaveBusinessBank;}


    this.openPdf();

  })
   }

   openPdf(){
    this.spinner.hide();
      this.appraisalPdf.getAppraisalApplicationPDF(this.FullNames,this.IdNo,this.PinNo,this.PostalAddress,this.Email,this.Telephone, this.TypeofBusiness, this.BeenInOperation, this.BeenInOperationTime, this.IsRegistered, this.CompanyBForm, this.TradeLicense, this.
        TypeofBuilding, this.Condition, this.OwnBuilding, this.BuildingOwnerName, this.BuildingOwnerAddress, this.BuildingRent, this.LayoutAndCleanliness, this.CashBook, this.CreditLedger, this.
               StockBooks, this.OtherBooks, this.OtherBooksDescription, this.IsBooksUpToDate, this.WhoKeepsBooks, this.IsPersonalDrawingsRecorded, this.HaveBusinessBank, this.
               BankName, this.BankBranch, this.A1, this.A2, this.A3, this.A4, this.A5, this.A6, this.B1, this.B2, this.B3, this.B4, this.B5, this.B6, this.C1, this.C2, this.C3, this.C4, this.C5, this.C6, this.ABC1, this.ABC2, this.ABC3, this.ABC4, this.ABC5, this.ABC6, this.D1, this.D2, this.D3, this.D4, this.
               D5, this.D6, this.ABCD1, this.ABCD2, this.ABCD3, this.ABCD4, this.ABCD5, this.ABCD6, this.E1, this.E2, this.E3, this.E4, this.E5, this.E6, this.F1, this.F2, this.F3, this.F4, this.F5, this.F6, this.EF1, this.EF2, this.EF3, this.EF4, this.EF5, this.EF6, this.S1, this.S2, this.S3, this.S4, this.S5, this.S6, this.MS1, this.MS2, this.MS3, this.MS4, this.MS5, this.MS6, this.
               OS1, this.OS2, this.OS3, this.OS4, this.OS5, this.OS6, this.PM1, this.PM2, this.PM3, this.PM4, this.PM5, this.PM6, this.GBC1, this.GBC2, this.GBC3, this.GBC4, this.GBC5, this.GBC6, this.CS1, this.CS2, this.CS3, this.CS4, this.CS5, this.CS6, this.DE1, this.DE2, this.DE3, this.DE4, this.DE5, this.DE6, this.AF1, this.AF2, this.AF3, this.AF4, this.AF5, this.AF6, this.
               OE1, this.OE2, this.OE3, this.OE4, this.OE5, this.OE6, this.GH1, this.GH2, this.GH3, this.GH4, this.GH5, this.GH6, this.SecurityType, this.ApproximateValOfSecurity, this.AdequacyofSecurity, this.Competitors, this.GeneralSafety, this.Regulations, this.TechnologyUsed, this.
               DateofVisit, this.PurposeActualScore, this.PurposeRemarks, this.CharacterActualScore, this.CharacterRemarks, this.SecurityActualScore, this.SecurityRemarks, this.AbilityActualScore, this.AbilityRemarks, this.
               AmountActualScore, this.AmountRemarks, this.TotalActualScore, this.TotalRemarks, this.BoardRecommendations, this.RecommName, this.RecommDate);
      
   }

}


