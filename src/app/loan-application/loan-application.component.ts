import { LoanApplicationPdfService } from './../shared/loan-application-pdf.service';
import { LoanPurpose } from './../shared/loan-purpose.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { LoanApplicationService } from 'src/app/shared/loan-application.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { LoanType } from '../shared/loan-type.model';
import { UserService } from '../shared/user.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css'],
  providers: [DatePipe]
})
export class LoanApplicationComponent implements OnInit {
  //Tab Manipulation
  selectedIndex: number = 0;
  maxNumberOfTabs: number = 3;

  //Tab Labels
  Tab1: any;
  Tab2: any;
  Tab3: any;

  ClientTypeId: any="";
  UserList: any="";
  MemberId:any=0;
  
  Purposeid:any=0;
  loanstatus:any="";
  loanTypeId:any=0;
  loanrepayperiod :any=0;
  loaninterestrate :any=0;
  loanrepayamount :any=0;
  loantransdate :any=new Date;
  loanappdate :any=new Date;
  //collateral
  Collateralname:any="";
  LoanCollateralId:number=0;
  loanid :number=0;
  ownername :string="";
  ownerdocument:string="";
  collateralremarks :string="";
  collateralvalue:number=0;
  //referees
  LoanRefereeId:number=0;
  
  NameOne	:string="";
  IDOne:string="";
  EmailOne:string="";
  PhoneOne:string="";
  LocationAddress1:string="";

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
  
  loanTypeList:any="";
  collateralList:any="";
  loanpurposeList:any="";
  LoanType:number=0;
  refereeList:any;
  loancollateralList:any;

  isValid:boolean=true;
  isCValid:boolean=true;
  isRValid:boolean=true;
  //Patternemail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  
  formattedcollateralValue:any="";
  isDisabled:boolean = false;
  loanResp:any;
  public loading: boolean = false;
  loanAppResp:any;
  isSuccess:any="";
  errDescription:any="";

  //Entity Details
  BusinessRegistrationDate:any="";
  KRAPin:any="";
  RegNo:any="";
  CurrentDebts:number=0;
  LongTermDebts:number=0;

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
  BusinessDebts:any=0;
  TotalDebts:any=0;
  formatedTotalDebts:any;
  BusinessLicence:any;
  ContactPerson:any;
  ContactPersonPosition:any;


  //Form Number
  FormNumber:any=0;

  //Personal Particulars
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
  spinnerContent:any;
  isDisconnected: boolean = false;
  Constituencies:any;
  Constituency:any;

  StationId:any=0;
  DepartmentId:any=0;
  EmployerId:any=0;
  IsComplete:boolean=false;

  

  LoanTransactionDate:any;
  LoanStatus:any;
  BusinessLength:any="";
  passedLoanId:any;
  openPdfId:any="No";
  appRespData:any;

  LoantypeId:any;
  loanRepayPeriod:any;
  CreatedBy:any;
  StoredfirstName:any;
  FullName:any="";


  constructor(private navCtrl:NgxNavigationWithDataComponent,private router:Router, private loanservice:LoanApplicationService,private currencyPipe : CurrencyPipe,
    private toastr: ToastrService,private spinner:NgxSpinnerService, private datePipe: DatePipe,private _snackBar: MatSnackBar, private pdfService: LoanApplicationPdfService,private userService:UserService) {
      //this.passedLoanId = 0;
      this.openPdfId = "No";
      this.MemberId=0;
      this.loantransdate=this.datePipe.transform(this.loantransdate, 'yyyy-MM-dd');
      this.loanappdate=this.datePipe.transform(this.loanappdate, 'yyyy-MM-dd');
      this.spinnerContent='';
      this.isSuccess=false;
      this.isDisconnected=false;
      this.errDescription='';
      this.StoredfirstName= window.localStorage.getItem('firstName');
      this.FullName=window.localStorage.getItem('CompanyName');
      
      //this.MemberId=window.localStorage.getItem('MemberId');

      //if LoanId is passed, we know we are editing
      this.passedLoanId = parseInt(localStorage.getItem('LoanIdParam'));
      //this.appRespData = [];
      this.openPdfId = localStorage.getItem('openPdfId');
     }

  ngOnInit() {
  
    
      this.getUserDetails();
    
     
    this.getConstituencies();  
    this.getLoanType(); 
  }

  getLoanType(){
    this.userService.getLoanType(1).subscribe((Response)=>{
      this.appRespData=Response;

      this.isSuccess = this.appRespData['IsSuccess'];
        this.errDescription = this.appRespData['ErrorDescription'];
         
        if (this.isSuccess==false && this.errDescription!=''){
            this.openSnackBar(this.errDescription);
          
            return;
          }
          
          if (this.isSuccess==true){
            this.LoantypeId =this.appRespData['LoanTypeId'];
            this.loanRepayPeriod=this.appRespData['Period'];
            this.CreatedBy='WebApp';
          }
      
      
    }),(error)=>{
      //do nothing for now
    }
  }

  getConstituencies(){
    this.userService.getAllEmployers().subscribe((Response)=>{
      this.Constituencies = Response;
    }),(error)=>{
      //do nothing for now
    }
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
 

  loadcollateral(loanTypeId){
    console.log(loanTypeId);
    if(loanTypeId>0){
      this.loanservice.getLoanTypeCollaterals(loanTypeId).subscribe((Response)=>{
        console.log(Response);
        this.collateralList=Response;
      })
    }
   
   
  }
  updateloanperioadanditerest(ctrl){
    if(ctrl.selectedIndex==0){
      this.loanrepayperiod=0;
      this.loaninterestrate=0;
    }
    else{
      this.loanrepayperiod=this.loanTypeList[ctrl.selectedIndex-1].Period;
      this.loaninterestrate=this.loanTypeList[ctrl.selectedIndex-1].InterestRate;
      
    }

   this.updateRepayAmount();
  }
 

 
  onSubmitReferees(NameOne,IDOne,EmailOne,PhoneOne,LocationAddress1)
  {
    
         
}
onSubmitcollateral(Collateralname,ownername,ownerdocument,collateralvalue){

 

  
}
callateralForm(form?:NgForm){
  if(form!=null)
  form.resetForm()
  //this.LoanRefereeId=null,
   //this.loanid =null,
    this.Collateralname ='',
      this. ownername ='',
     this.ownerdocument='',
      this.collateralremarks ='',
      this.collateralvalue=0

}
refereesForm(form?:NgForm){
  if(form!=null)
  form.resetForm()
  //this.LoanRefereeId=null,
  this.NameOne	='',
  this.IDOne='',
  this.EmailOne='',
  this.PhoneOne='',
  this.LocationAddress1=''
  

}
LoanForm(form?:NgForm){
  if(form!=null)
  form.resetForm()
  this.loanAmount=0
  this.Purposeid=null,
  this.loanstatus='',
  this.loanrepayperiod=0,
  this.loaninterestrate=0,
  this.loanrepayamount=0
  

}
onDeleteReferees(i:number,LoanRefereeId:number){
  this.refereeList.splice(i,1);
}
onDeleteColateral(i:number,LoanCollateralId:number){
  this.loancollateralList.splice(i,1)
}

onSubmitProgress(NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
  MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
  KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
  GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,GOneIdNo,GTwoIdNo){


    
    

    this.passedLoanId = parseInt(localStorage.getItem('LoanIdParam'));
    if(this.passedLoanId == 0){
      this.spinnerContent='Saving Application Progress....';
    this.spinner.show();
      this.loanservice.insertLoanApplication(this.MemberId,NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
        MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
        KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
        GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,this.IsComplete=false,GOneIdNo,GTwoIdNo,this.LoantypeId,this.loanRepayPeriod,this.CreatedBy).subscribe(Response =>{
          
         
        this.loanAppResp = Response;
        this.isSuccess = this.loanAppResp['IsSuccess'];
        this.errDescription = this.loanAppResp['ErrorDescription'];
         
        if (this.isSuccess==false && this.errDescription!=''){
            this.openSnackBar(this.errDescription);
            this.spinner.hide();
            return;
          }
          
          if (this.isSuccess==true){
            this.toastr.success('Application Progresss Submited','');
            window.localStorage.setItem('LoanIdParam', '0');
            this.spinner.hide();
            this.router.navigate(['/Home']);
          }
      
      
       },(error)=>{
        //this.spinner.hide();
        this.isDisconnected=true;
      });
         
    
    }else{
      this.spinnerContent='Udating Progress....';
    this.spinner.show();
    console.log("LoanIdUpdate"+this.passedLoanId)
      this.loanservice.updateLoanApplication(this.passedLoanId,this.MemberId,NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
        MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
        KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
        GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,this.IsComplete=false,GOneIdNo,GTwoIdNo,this.LoantypeId,this.loanRepayPeriod,this.CreatedBy).subscribe(Response =>{
          
    
        this.loanAppResp = Response;
        this.isSuccess = this.loanAppResp['IsSuccess'];
        this.errDescription = this.loanAppResp['ErrorDescription'];
         
        if (this.isSuccess==false && this.errDescription!=''){
            this.openSnackBar(this.errDescription);
            this.spinner.hide();
            return;
          }
          
          if (this.isSuccess==true){
            this.toastr.success('Application Progress Updated','');
            window.localStorage.setItem('LoanIdParam', '0');
            this.spinner.hide();
            this.router.navigate(['/Home']);
          }
      
      
       },(error)=>{
        //this.spinner.hide();
        this.isDisconnected=true;
      });
         
    
    }
   


 
}
formValidation(){
  this.isValid=true;
  if(this.LoanType==0)
  this.isValid=false;
   if(this.loanAmount==0)
  this.isValid=false;
  if(this.loanrepayperiod==0)
  this.isValid=false;
  return this.isValid; 
}

updateRepayAmount(){
  this.loanrepayamount=parseFloat((this.loanAmount/this.loanrepayperiod).toFixed(2))

}
transformAmount(element){
  this.formattedAmount = this.currencyPipe.transform(this.loanAmount, 'Ksh.');
 

  element.target.value = this.formattedAmount;

}



onSubmit(NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
  MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
  KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
  GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,GOneIdNo,GTwoIdNo){

    

    if(this.ClientTypeId == '1'){
      if(this.loanAmount<30000 || this.loanAmount > 300000){
        this.toastr.warning('Enter a loan Amount Between Ksh. 30,000 and Ksh. 300,000','');
        return;
      }
    }
    if(this.ClientTypeId == '2'){
      if(this.loanAmount<300000 || this.loanAmount > 1000000){
        this.toastr.warning('Enter a loan Amount Between Ksh. 300,000 and Ksh. 1,000,000','');
        return;
      }
    }

    if(confirm('You are about to apply for a Ksh '+this.loanAmount+' Loan. Press Ok to apply.')){

      this.passedLoanId = parseInt(localStorage.getItem('LoanIdParam'));
      if(this.passedLoanId == 0){
        this.spinnerContent='Applying Loan....';
      this.spinner.show();
        this.loanservice.insertLoanApplication(this.MemberId,NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
          MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
          KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
          GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,this.IsComplete=true,GOneIdNo,GTwoIdNo,this.LoantypeId,this.loanRepayPeriod,this.CreatedBy).subscribe(Response1 =>{
            
           console.log('IsComplete'+this.IsComplete);
          this.loanAppResp = Response1;
          this.isSuccess = this.loanAppResp['IsSuccess'];
          this.errDescription = this.loanAppResp['ErrorDescription'];
           
          if (this.isSuccess==false && this.errDescription!=''){
              this.openSnackBar(this.errDescription);
              this.spinner.hide();
              return;
            }
            
            if (this.isSuccess==true){
              this.toastr.success('Application Submited','');
              window.localStorage.setItem('LoanIdParam', '0');
              this.spinner.hide();
              this.router.navigate(['/Home']);
            }
        
        
         },(error)=>{
          //this.spinner.hide();
          this.isDisconnected=true;
        });
           
      
      }else{
        this.spinnerContent='Udating Loan....';
      this.spinner.show();
      console.log("LoanIdUpdate"+this.passedLoanId)
        this.loanservice.updateLoanApplication(this.passedLoanId,this.MemberId,NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
          MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
          KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
          GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,this.IsComplete=true,GOneIdNo,GTwoIdNo,this.LoantypeId,this.loanRepayPeriod,this.CreatedBy).subscribe(Response =>{
            
            console.log('IsComplete'+this.IsComplete);
          this.loanAppResp = Response;
          this.isSuccess = this.loanAppResp['IsSuccess'];
          this.errDescription = this.loanAppResp['ErrorDescription'];
           
          if (this.isSuccess==false && this.errDescription!=''){
              this.openSnackBar(this.errDescription);
              this.spinner.hide();
              return;
            }
            
            if (this.isSuccess==true){
              window.localStorage.setItem('LoanIdParam', '0');
              this.toastr.success('Application Updated','');
              this.spinner.hide();
              this.router.navigate(['/Home']);
            }
        
        
         },(error)=>{
          //this.spinner.hide();
          this.isDisconnected=true;
        });
           
      
      }
    }
 

}


getUserDetails(){
  this.spinnerContent='Getting Details....';
    this.spinner.show();
  
  //if(window.localStorage.getItem('OpenPdf') == 'True'){this.generatePdf();}
  this.IdNo = localStorage.getItem('natIdNo');
  this.loanservice.getUserDetails(parseInt(this.IdNo)).subscribe(Response =>{
        
        this.MemberId=Response.member.memberid;
        console.log(this.MemberId);
        this.FullNames=Response.member.mfirstname +' '+Response.member.msurname +' '+ Response.member.mothername;
        this.IdNo=Response.member.IDNO;
        this.RegNo=Response.member.IDNO;
        this.BusinessRegistrationDate=Response.member.mdob;
        this.KRAPin=Response.member.personalKRA;
        this.FormOfBusiness=Response.member.FormOfBusiness;
        this.StationId = Response.member.stationid;
        this.DepartmentId = Response.member.deptid;
        this.EmployerId = Response.member.employerid;
        this.PostalAddress=Response.member.mpostaladdress;
        this.Email=Response.member.memail;
        this.TelephoneNumber=Response.member.mcell;
        this.LevelOfEducation=Response.member.LevelOfEducation;
        this.ClientTypeId=Response.member.ClientTypeid;
        this.ContactPerson = Response.member.ContantPerson;
        this.ContactPersonPosition = Response.member.ContantPersonPosition;
        
       
        if(this.EmployerId != 0){
          this.getSubCounty(this.EmployerId);
        }

        if(this.ClientTypeId=='2'){this.Tab1 ='(A.) ENTITY PARTICULARS/ DETAILS'; this.Tab2 ='(B.) BUSINESS OPERATION DETAILS'; this.Tab3 ='(C.) LOAN DETAILS ';}
        if(this.ClientTypeId=='1'){this.Tab1 ='(A.) PERSONAL PARTICULARS'; this.Tab2 ='(B.) BUSINESS DETAILS'; this.Tab3 ='(C.) LOAN DETAILS';}       
        this.spinner.hide();
      });
}

getWard(id: any){
  this.loanservice.getWard(parseInt(id)).subscribe(Response =>{
    this.Ward=Response.ward.stationname;
    this.WardAdministrator=Response.ward.StationAddress; 
    this.FormNumber=Response.ward.stationcode;
    if(this.DepartmentId != 0){
      this.getVillage(this.DepartmentId);
    }
    
})
}

getSubCounty(id: any){
  this.loanservice.getSubcounty(parseInt(id)).subscribe(Response =>{
    this.SubCountyPerson=Response.subcounty.Employername;
    if(this.StationId != 0){
      this.getWard(this.StationId);
    }
    
})
}

getVillage(id: any){
  this.loanservice.getVillage(parseInt(id)).subscribe(Response =>{
    this.Village=Response.village.DepartmentName;
    this.VillageAdministrator=Response.village.Remarks;
    if(this.MemberId != 0){
      this.getBusinessDetails(this.MemberId);
    }
})
}

getBusinessDetails(id: any){
  this.loanservice.getBusinessDetailsById(parseInt(id)).subscribe(Response =>{
    this.BusinessName=Response.businessDetails.BusinessName;
    if(this.ClientTypeId==1){this.FormOfBusiness=Response.businessDetails.FormOfBusiness;}
    this.PhysicalAddress=Response.businessDetails.PhysicalAddress;
    this.NatureOfBusiness=Response.businessDetails.BusinessType;
    this.LegalStatus=Response.businessDetails.LegalStatus;
   
    
   if(this.passedLoanId != 0 ){
    this.getUserApplicationFormDetails(this.passedLoanId);
   }
    
})
}


generatePdf() {
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

Reload(){
  window.location.reload();
  //this.router.navigate(['/A-Dashboard']);
}


getUserApplicationFormDetails(passedLoanId){
  
  this.loanservice.getApplicationDetailsById(passedLoanId).subscribe(Response =>{
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
    if(Response.loan.loantransdate != "null"){this.LoanTransactionDate=Response.loan.loantransdate;}
    if(Response.loan.loanstatus != "null"){this.LoanStatus=Response.loan.loanstatus;}
    



 if(this.openPdfId == 'Yes'){

    this.generatePdf();
    window.localStorage.setItem('openPdfId', 'No');
    this.navCtrl.navigate('UserLoanApplication');


   }
});
}

     formulation(){
      
      this.TotalDebts = this.BusinessDebts +  this.PrivateDebts;   
     }
}
