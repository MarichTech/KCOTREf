import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoanApplicationService {
  IsComplete:boolean=true;

 //readonly apiURL='https://micropointlive.com/demo/Loan/api'
  constructor(private http:HttpClient) { }


    saveNewLoan(MemberId,loanAmount, Purposeid,LoanType, loanrepayperiod,loaninterestrate,loanrepayamount,loantransdate,loanappdate){
      return this.http.get('http://3.13.237.46/demo/loan/saveNewLoan?MemberId='+MemberId+'&&LoanAmount='+loanAmount+'&&LoanPurposeId='+Purposeid+'&&LoanTypeId='+LoanType+'&&LoanRepayPeriod='+loanrepayperiod+'&&LoanInterestRate='+loaninterestrate+'&&LoanRepayAmount='+loanrepayamount+'&&LoanTransDate='+loantransdate+'&&LoanAppDate='+loanappdate+'');

    }
    addLoanCollaterals(Collateralname,loanid,ownername,ownerdocument,collateralvalue){
      return this.http.get('http://3.13.237.46/demo/Loan/addLoanCollaterals?CollateralName='+Collateralname+'&&LoanId='+loanid+'&&OwnerName='+ownername+'&&Ownerdocument='+ownerdocument+'&&CollateralValue='+collateralvalue+'');

    }
    addLoanReferees(Loanid,NameOne,IDOne,EmailOne,PhoneOne,LocationAddress1){
      return this.http.get('http://3.13.237.46/demo/Loan/addLoanReferees?LoanId='+Loanid+'&&RefereeName='+NameOne+'&&NationalId='+IDOne+'&&Email='+EmailOne+'&&PhoneNumber='+PhoneOne+'&&PhysicalAddress='+LocationAddress1+'');

    }


    getloanpurposes(){
      return this.http.get('http://3.13.237.46/demo/loan/getloanpurposes');
       }
          
    GetLoanTypes(){
      return this.http.get('http://3.13.237.46/demo/Loan/GetLoanTypes');
    }
    getLoanTypeCollaterals(loanTypeId){
      //return this.http.get(environment.apiURL+'/Colleteral').toPromise();
      return this.http.get('http://3.13.237.46/demo/Loan/getLoanTypeCollaterals?LoanTypeId='+loanTypeId);
    }
              
    getUserDetails(userId):any{
     return this.http.get('http://3.13.237.46/Demo/Loan/getAllMemberDetailsById?IdNo='+userId);
    }  
    
    getWard(id):any{
      return this.http.get('http://3.13.237.46/Demo/Loan/getStation?StationId='+id);
    }

    getSubcounty(id):any{
      return this.http.get('http://3.13.237.46/Demo/Loan/getEmployer?Employeid='+id);
    }

    getVillage(id):any{
      return this.http.get('http://3.13.237.46/Demo/Loan/getDepartment?DepartmentId='+id);
    }
    
    getBusinessDetailsById(id):any{
      return this.http.get('http://3.13.237.46/demo/loan/getBusinessDetailsById?MemberId='+id);
    }


    insertLoanApplication(MemberId,NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
      MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
      KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
      GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,IsComplete,GOneId,GTwoId,LoantypeId,loanRepayPeriod,CreatedBy){
        //http://micropointlive.com/Demo/
        
      return this.http.get('http://micropointlive.com/Demo/Loan/loanApplication?memberid='+MemberId+'&&NextofKen='+NextofKen+'&&KinRelationship='+KinRelationship+'&&BusinessTraining='+BusinessTraining+
      '&&BusinessTrainingD='+BusinessTrainingD+'&&BusinessPeriod='+BusinessPeriod+'&&PaidEmployement='+PaidEmployement+'&&PaidEmployementD='+PaidEmployementD+
      '&&Disability='+Disability+'&&DisabilityD='+DisabilityD+'&&SourceofIncome='+SourceofIncome+'&&BusinessLicences='+BusinessLicences+'&&PloatNumber='+PloatNumber+
      '&&MarketRoad='+MarketRoad+'&&SubCounty='+SubCounty+'&&Partners='+Partners+'&&BusinessOperation='+BusinessOperation+'&&NoOfEmployee='+NoOfEmployee+
      '&&OwnBusinessBuiding='+OwnBusinessBuiding+'&&BOwnerName='+BOwnerName+'&&BOwenerAddress='+BOwenerAddress+'&&BMonthRent='+BMonthRent+'&&AverageSales='+AverageSales+'&&AverageExpenses='+AverageExpenses+
      '&&BMonthlyProfit='+BMonthlyProfit+'&&saleAbleStock='+saleAbleStock+'&&BooksOfAccount='+BooksOfAccount+'&&KeepingBooksOfAccount='+KeepingBooksOfAccount+'&&BBankAccount='+BBankAccount+
      '&&BankName='+BankName+'&&BankBranch='+BankBranch+'&&AccountNumber='+AccountNumber+'&&PrivateDebts='+PrivateDebts+'&&BusinessDebts='+BusinessDebts+'&&TotalDebts='+TotalDebts+'&&LoanAmout='+LoanAmout+
      '&&LoanPurposes='+LoanPurposes+'&&CreditorName='+CreditorName+'&&Collateral='+Collateral+'&&GOneName='+GOneName+'&&GOneAddress='+GOneAddress+'&&GOneEmail='+GOneEmail+
      '&&GOnePhone='+GOnePhone+'&&GTwoName='+GTwoName+'&&GTwoAddress='+GTwoAddress+'&&GTwoEmail='+GTwoEmail+'&&GTwoPhone='+GTwoPhone+'&&IsComplete='+IsComplete+'&&GOneId='+GOneId+'&&GTwoId='+GTwoId+
      '&&LoantypeId='+LoantypeId+'&&loanRepayPeriod='+loanRepayPeriod+'&&CreatedBy='+CreatedBy+'');
      //&&LoantypeId=1&&loanRepayPeriod=1&&CreatedBy=WEB
    }

    updateLoanApplication(LoanId,MemberId,NextofKen,KinRelationship,BusinessTraining,BusinessTrainingD,BusinessPeriod,PaidEmployement,PaidEmployementD,Disability,DisabilityD,SourceofIncome,BusinessLicences,PloatNumber,
      MarketRoad,SubCounty,Partners,BusinessOperation,NoOfEmployee,OwnBusinessBuiding,BOwnerName,BOwenerAddress,BMonthRent,AverageSales,AverageExpenses,BMonthlyProfit,saleAbleStock,BooksOfAccount,
      KeepingBooksOfAccount,BBankAccount,BankName,BankBranch,AccountNumber,PrivateDebts,BusinessDebts,TotalDebts,LoanAmout,LoanPurposes,CreditorName,Collateral,GOneName,GOneAddress,GOneEmail,
      GOnePhone,GTwoName,GTwoAddress,GTwoEmail,GTwoPhone,IsComplete,GOneId,GTwoId,LoantypeId,loanRepayPeriod,CreatedBy){
        //http://micropointlive.com/Demo/
        
      return this.http.get('http://micropointlive.com/Demo/Loan/UpdateApplication?LoanId='+LoanId+'&&memberid='+MemberId+'&&NextofKen='+NextofKen+'&&KinRelationship='+KinRelationship+'&&BusinessTraining='+BusinessTraining+
      '&&BusinessTrainingD='+BusinessTrainingD+'&&BusinessPeriod='+BusinessPeriod+'&&PaidEmployement='+PaidEmployement+'&&PaidEmployementD='+PaidEmployementD+
      '&&Disability='+Disability+'&&DisabilityD='+DisabilityD+'&&SourceofIncome='+SourceofIncome+'&&BusinessLicences='+BusinessLicences+'&&PloatNumber='+PloatNumber+
      '&&MarketRoad='+MarketRoad+'&&SubCounty='+SubCounty+'&&Partners='+Partners+'&&BusinessOperation='+BusinessOperation+'&&NoOfEmployee='+NoOfEmployee+
      '&&OwnBusinessBuiding='+OwnBusinessBuiding+'&&BOwnerName='+BOwnerName+'&&BOwenerAddress='+BOwenerAddress+'&&BMonthRent='+BMonthRent+'&&AverageSales='+AverageSales+'&&AverageExpenses='+AverageExpenses+
      '&&BMonthlyProfit='+BMonthlyProfit+'&&saleAbleStock='+saleAbleStock+'&&BooksOfAccount='+BooksOfAccount+'&&KeepingBooksOfAccount='+KeepingBooksOfAccount+'&&BBankAccount='+BBankAccount+
      '&&BankName='+BankName+'&&BankBranch='+BankBranch+'&&AccountNumber='+AccountNumber+'&&PrivateDebts='+PrivateDebts+'&&BusinessDebts='+BusinessDebts+'&&TotalDebts='+TotalDebts+'&&LoanAmout='+LoanAmout+
      '&&LoanPurposes='+LoanPurposes+'&&CreditorName='+CreditorName+'&&Collateral='+Collateral+'&&GOneName='+GOneName+'&&GOneAddress='+GOneAddress+'&&GOneEmail='+GOneEmail+
      '&&GOnePhone='+GOnePhone+'&&GTwoName='+GTwoName+'&&GTwoAddress='+GTwoAddress+'&&GTwoEmail='+GTwoEmail+'&&GTwoPhone='+GTwoPhone+'&&IsComplete='+IsComplete+'&&GOneId='+GOneId+'&&GTwoId='+GTwoId+
      '&&LoantypeId='+LoantypeId+'&&loanRepayPeriod='+loanRepayPeriod+'&&CreatedBy='+CreatedBy+'');
    }

    saveAppraisalFormDetails(LoanId,MemberId,TypeofBusiness,BeenInOperation,BeenInOperationTime,IsRegistered,CompanyBForm,TradeLicense,TypeofBuilding,
      Condition,OwnBuilding,BuildingOwnerName,BuildingOwnerAddress,BuildingRent,LayoutAndCleanliness,CashBook,CreditLedger,
      StockBooks,OtherBooks,OtherBooksDescription,IsBooksUpToDate,WhoKeepsBooks,IsPersonalDrawingsRecorded,HaveBusinessBank,
      BankName,BankBranch,A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,C6,D1,D2,D3,D4,
      D5,D6,E1,E2,E3,E4,E5,E6,F1,F2,F3,F4,F5,F6,MS1,MS2,MS3,MS4,MS5,MS6,
      OS1,OS2,OS3,OS4,OS5,OS6,PM1,PM2,PM3,PM4,PM5,PM6,GBC1,GBC2,GBC3,GBC4,GBC5,GBC6,CS1,CS2,CS3,CS4,CS5,CS6,DE1,DE2,DE3,DE4,DE5,DE6){

        return this.http.get('http://3.13.237.46/Demo/Appriasal/AddAppriasalone?LoanId='+LoanId+'&&MemberId='+MemberId+'&&Typeofbusiness='+TypeofBusiness+'&&BusinessExistencePeriod='+BeenInOperation+BeenInOperationTime+
        '&&FormOfBusiness='+CompanyBForm+'&&IsRegistered='+IsRegistered+'&&TradeLicenseNumber='+TradeLicense+'&&PremiseTypeofBuilding='+TypeofBuilding+'&&PremiseCondition='+Condition+
        '&&PremiseOwnership='+OwnBuilding+'&&LandLordName='+BuildingOwnerName+'&&LandLordAddress='+BuildingOwnerAddress+'&&PremiseRent='+BuildingRent+'&&PremiseLayoutAndCleanliness='+LayoutAndCleanliness+
        '&&TypeOfBooks='+CashBook+'&&IsBooksUptoDate='+IsBooksUpToDate+'&&BooksKeeper='+WhoKeepsBooks+'&&IsPersonalDrawingsRecorded='+IsPersonalDrawingsRecorded+'&&BankAccountName='+BankName+
        '&&BankAccountBranch='+BankBranch+'&&CashInBankSOM1st='+A1+'&&CashInBankSOM2nd='+A2+'&&CashInBankSOM3rd='+A3+'&&CashInBankSOM4th='+A4+'&&CashInBankSOM5th='+A5+'&&CashInBankSOM6th='+A6+
        '&&CashInHandSOM1st='+B1+'&&CashInHandSOM2nd='+B2+'&&CashInHandSOM3rd='+B3+'&&CashInHandSOM4th='+B4+'&&CashInHandSOM5th='+B5+'&&CashInHandSOM6th='+B6+
        '&&CashSales1st='+C1+'&&CashSales2nd='+C2+'&&CashSales3rd='+C3+'&&CashSales4th='+C4+'&&CashSales5th='+C5+'&&CashSales6th='+C6+
        '&&OtherMoniesExp1st='+D1+'&&OtherMoniesExp2nd='+D2+'&&OtherMoniesExp3rd='+D3+'&&OtherMoniesExp4th='+D4+'&&OtherMoniesExp5th='+D5+'&&OtherMoniesExp6th='+D6+
        '&&CashPurchases1st='+E1+'&&CashPurchases2nd='+E2+'&&CashPurchases3rd='+E3+'&&CashPurchases4th='+E4+'&&CashPurchases5th='+E5+'&&CashPurchases6th='+E6+
        '&&CashPayments1st='+F1+'&&CashPayments2nd='+F2+'&&CashPayments3rd='+F3+'&&CashPayments4th='+F4+'&&CashPayments5th='+F5+'&&CashPayments6th='+F6+
        '&&MonthlySales1st='+MS1+'&&MonthlySales2nd='+MS2+'&&MonthlySales3rd='+MS3+'&&MonthlySales4th='+MS4+'&&MonthlySales5th='+MS5+'&&MonthlySales6th='+MS6+
        '&&OpeningStock1st='+OS1+'&&OpeningStock2nd='+OS2+'&&OpeningStock3rd='+OS3+'&&OpeningStock4th='+OS4+'&&OpeningStock5th='+OS5+'&&OpeningStock6th='+OS6+
        '&&PurchasesThatMonth1st='+PM1+'&&PurchasesThatMonth2nd='+PM2+'&&PurchasesThatMonth3rd='+PM3+'&&PurchasesThatMonth4th='+PM4+'&&PurchasesThatMonth5th='+PM5+'&&PurchasesThatMonth6th='+PM6+
        '&&GoodsAvailableForSale1st='+GBC1+'&&GoodsAvailableForSale2nd='+GBC2+'&&GoodsAvailableForSale3rd='+GBC3+'&&GoodsAvailableForSale4th='+GBC4+'&&GoodsAvailableForSale5th='+GBC5+'&&GoodsAvailableForSale6th='+GBC6+
        '&&ClosingStock1st='+CS1+'&&ClosingStock2nd='+CS2+'&&ClosingStock3rd='+CS3+'&&ClosingStock4th='+CS4+'&&ClosingStock5th='+CS5+'&&ClosingStock6th='+CS6+
        '&&CostOfGoodsSold1st='+DE1+'&&CostOfGoodsSold2nd='+DE2+'&&CostOfGoodsSold3rd='+DE3+'&&CostOfGoodsSold4th='+DE4+'&&CostOfGoodsSold5th='+DE5+'&&CostOfGoodsSold6th='+DE6+'');

      }

      saveApprasisalFormPart2(Id,AF1,AF2,AF3,AF4,AF5,AF6,
        OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
        DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
        AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,BoardRecommendations,RecommDate,CreditLedger,StockBooks,OtherBooks,OtherBooksDescription,HaveBusinessBank,LoanId){
        return this.http.get('http://3.13.237.46/Demo//Appriasal/UpdateAppriasal?Id='+Id+
        '&&GrossProfit1st='+AF1+'&&GrossProfit2nd='+AF2+'&&GrossProfit3rd='+AF3+'&&GrossProfit4th='+AF4+'&&GrossProfit5th='+AF5+'&&GrossProfit6th='+AF6+
        '&&OperatingExpenses1st='+OE1+'&&OperatingExpenses2nd='+OE2+'&&OperatingExpenses3rd='+OE3+'&&OperatingExpenses4th='+OE4+'&&OperatingExpenses5th='+OE5+'&&OperatingExpenses6th='+OE6+
        '&&NetProfit1st='+GH1+'&&NetProfit2nd='+GH2+'&&NetProfit3rd='+GH3+'&&NetProfit4th='+GH4+'&&NetProfit5th='+GH5+'&&NetProfit6th='+GH6+
        '&&Typeofsecurity='+SecurityType+'&&ApprxSecurityValue='+ApproximateValOfSecurity+'&&SecurityAdequacy='+AdequacyofSecurity+'&&BCompetitors='+Competitors+
        '&&BGeneralSafety='+GeneralSafety+'&&BRegulations='+Regulations+
        '&&BTechnology='+TechnologyUsed+'&&DateOfVisits='+DateofVisit+'&&SSPurpose='+PurposeActualScore+'&&SSPurposeRemarks='+PurposeRemarks+'&&SSCharacter='+CharacterActualScore+
        '&&SSCharacterRemarks='+CharacterRemarks+'&&SSSecurity='+SecurityActualScore+
        '&&SSSecurityRemarks='+SecurityRemarks+'&&SSAbility='+AbilityActualScore+'&&SSAbilityRemarks='+AbilityRemarks+
        '&&SSAmount='+AmountActualScore+'&&SSAmountRemarks='+AmountRemarks+'&&SSTotal='+TotalActualScore+'&&SSTotalRemarks='+TotalRemarks+
        '&&BoardRecommendations='+BoardRecommendations+'&&RecommDate='+RecommDate+'&&CreditLedger='+CreditLedger+'&&StockBooks='+StockBooks+'&&OtherBooks='+OtherBooks+'&&OtherBooksDescription='+OtherBooksDescription+'&&HaveBusinessBank='+HaveBusinessBank+'&&LoanId='+LoanId+'');

      }

      getPendingAppraisalList(){
        return this.http.get('http://micropointlive.com/Demo/Loan/getAllApplicationsBySubCounty');
        //http://micropointlive.com/Demo/Loan/getAllApplicationsBySubCounty
      }

  
      getUserApplicationList(id){
        return this.http.get('http://3.13.237.46/Demo/Loan/getAllLoansForEachMember?MemberId='+id);
      }

      getApplicationDetailsById(id):any{
        return this.http.get('http://3.13.237.46/Demo/Loan/getloanApplication?LoanId='+id);
      } 

      getSubCountysList(){
        return this.http.get('http://micropointlive.com/Demo/Loan/getAllSubcounty');
        //http://micropointlive.com/Demo/Loan/getAllSubcounty
      }

      getWardsList(){
        return this.http.get('http://micropointlive.com/Demo/Loan/getAllWards');
        //http://micropointlive.com/Demo/Loan/getAllWards
      }

      getVillagesList(){
        return this.http.get('http://micropointlive.com/Demo/Loan/getAllVillages');
        //http://micropointlive.com/Demo/Loan/getAllVillages
      }
      
      getAppraisalList(){
        return this.http.get('http://micropointlive.com/Demo/Loan/getAllApraisalApplications');
        //http://localhost:51042/Loan/getAllApraisalApplications
      }

      getApprovalList(){
        return this.http.get('http://micropointlive.com/Demo/Loan/getAllApproveApplications');
        //http://localhost:51042/Loan/getAllApproveApplications
      }




}
