import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   //formData: User;
  activeCode:any="";
  storedEmail:any="";
  memberId:any;
   root:any;
  constructor(private http:HttpClient) {
    this.root="http://localhost:51042/";
   }

  fetchUserDetails(id:number){
    return  this.http.get(this.root+'App/UserDetails?Id='+id);
  }
  getAllUsers(){
    return this.http.get(this.root+'App/AllUsers')
    .toPromise().then(res=>{
      //this.userList=res as User[];
    });
  }
  addUserDetails(userCode,userName,userFullNames,roleId){
    return  this.http.get(this.root+'App/addUser?usercode='+userCode+'&username='+userName+'&fullnames='+userFullNames+'&roleid='+roleId);
  }
  getCustViaNationIdNo(IdNo){
    return this.http.get('http://3.13.237.46/Demo/app/MemberDetailsViaIdNumber?natidno='+IdNo);
  }
  isVerified(MemberId){
    return this.http.get('http://3.13.237.46/Demo/App/IsActive?Memberid='+MemberId);
  }
  moveToActivatePage(activeCode,storedEmail,memberId){
    this.activeCode=activeCode;
    this.storedEmail=storedEmail;
    this.memberId=memberId;
  }
  getLoanType(loanTypeId){
    return this.http.get('http://3.13.237.46/Demo/Loan/GetLoantype?loantypeid='+loanTypeId);
  }
  getMemberActiveLoanSummary(memberId){
    return this.http.get('http://3.13.237.46/Demo/loan/membertotalloanbalance?memberid='+memberId);
  }
  getMemberAccounts(MemberId){
    return this.http.get('http://3.13.237.46/Demo/Balance/FetchBalance?MemberId='+MemberId);
  }
  getMemberLoanLimit(memberId,loanTypeId){
    return this.http.get('http://3.13.237.46/Demo/loan/memberloanlimit?memberid='+memberId+'&&loantypeid='+loanTypeId);
  }
  pay(Amount,DevKey,Paybill,PhoneNumber,Account,TimeStamp){
    return this.http.get('http://3.13.237.46/mpsSTK/api/STKPush?Amount='+Amount+'&&DevKey='+DevKey+'&&Paybill='+Paybill+'&&PhoneNumber='+PhoneNumber+'&Account='+Account+'&TimeStamp='+TimeStamp);
  }
  getMemberLoansHistoryViaMemberId(memberId){
    return this.http.get('http://3.13.237.46/Demo/Loan/LoanHistory?MemberId='+memberId);
  }
  getMemberRunningLoans(memberId){
    return this.http.get('http://3.13.237.46/Demo/Loan/runningloans?MemberId='+memberId)
  }
  getMemberClosedLoans(memberId){
    return this.http.get('http://3.13.237.46/Demo/Loan/closedloans?MemberId='+memberId);
  }
  getLoanRepayments(LoanId){
    return this.http.get('http://3.13.237.46/Demo/App/Repayments?loanid='+LoanId);
  }
  getTerms(loanTypeId,loanAmount,Period,IsLoanPreview){
    return this.http.get('http://3.13.237.46/Demo/Loan/GetLoanSchedule?loantypeId='+loanTypeId+'&&loanAmount='+loanAmount+'&&repayPeriod='+Period+'&&IsLoanPreview='+IsLoanPreview);
  }
  addCustLoan(memberId,loanTypeId,period,loanAmount,installmentAmount){
    return this.http.get('http://3.13.237.46/Demo/Loan/SubmitApplication?memberId='+memberId+'&&Loantypeid='+loanTypeId+'&&period='+period+'&&loanamount='+loanAmount+'&&instalmentAmount='+installmentAmount);
  }
  getCustViaMemberID(MemberId){
    return this.http.get('http://3.13.237.46/Demo/Mobile/details?memberid='+MemberId);
  }
  changePIN(memberId,newPin){
    return this.http.get('http://3.13.237.46/Demo/Mobile/changePin?Memberid='+memberId+'&&newpin='+newPin);
  }
  regCustomerNew(NationalId,Surname,OtherNames,FirstName,CellNo,DOB,PIN,EmailAddress,SecurityQuestion,SecurityAnswer){
    return this.http.get('http://3.13.237.46/Demo/Mobile/Register?NationalId='+NationalId+'&&Surname='+Surname+'&&OtherNames='+OtherNames+'&&FirstName='+FirstName+'&&CellNo='+CellNo+'&&DOB='+DOB+'&&PIN='+PIN+'&&EmailAddress='+EmailAddress+'&&securityQuestion='+SecurityQuestion+'&&SecurityAnswer='+SecurityAnswer);
  }
  sendCodethruMemberNo(MemberNo){
    return this.http.get('http://3.13.237.46/Demo/app/sendcode?memberno='+MemberNo);
  }
  sendCodeviaIdNo(NatIdNo){
    return this.http.get('http://3.13.237.46/Demo/app/SendCodeViaId?natidno='+NatIdNo);
  }
  getMemberShares(memberId){
    return this.http.get('http://3.13.237.46/Demo/Balance/FetchMemberBalances?MemberId='+memberId);
  }
  getMemberLoanEligibility(memberId){
    return this.http.get('http://3.13.237.46/demo/Loan/MemberEligibility?MemberId='+memberId);
  }
  getLoanTypes(){
    return this.http.get('http://3.13.237.46/demo/LOAN/getloantypes');
  }
  getMemberDetailsviaMemberNo(memberNo){
    return this.http.get('http://3.13.237.46/demo/App/forgotpin?memberno='+memberNo);
  }
  submitGuarantorNomination(nominatedGuarantorId,memberid,guarantorId,loanId,nominatedAmount,nominatedStatus,sourceName){
    return this.http.get('http://3.13.237.46/demo/Guarantor/Guarantee?nominatedGuarantorId='+nominatedGuarantorId+'&&memberid='+memberid+'&&guarantorId='+guarantorId+'&&loanId='+loanId+'&&nominatedAmount='+nominatedAmount+'&&nominatedStatus='+nominatedStatus+'&&sourceName='+sourceName);
  }
  getLoanNominations(LoanId){
    return this.http.get('http://3.13.237.46/demo/Guarantor/NominatedGuarantors?LoanId='+LoanId);
  }
  getApprovalList(memberId){
    return this.http.get('http://3.13.237.46/demo/Guarantor/NominatedGuarantor?MemberId='+memberId);
  }
  getAllEmployers(){
    return this.http.get('http://3.13.237.46/demo/App/getemployers');
  }
  getstation(employerId){
    return this.http.get('http://3.13.237.46/demo/app/getstations?employerid='+employerId);
  }
  getDepartments(stationId){
    return this.http.get('http://3.13.237.46/demo/app/getdepartmentsviastationid?stationid='+stationId);
  }
  getBusinessTypes(){
    return this.http.get('http://3.13.237.46/demo/app/getbusinesstypes');
  }
  registerWebMember(ClientTypeId,ConstituencyId,WardId,VillageId,FirstName,OtherNames,Surname,PhoneNumber,DOB,NationalId,EmailAddress,Gender,LevelOfEducation,EmployementStatus,PostalAddress,BusinessName,BRegDate,BKRAPIN,FormOfBusiness,BusinessTypeId,SecurityQuestion,SecurityAnswer,PIN,personalKRA,AlternativePhoneNumber,LegalStatus,RegistrationNo,BusinessPhysicalAddress){
    return this.http.get('http://3.13.237.46/demo/App/New?ClientTypeId='+ClientTypeId+'&&ConstituencyId='+ConstituencyId+
    '&&WardId='+WardId+'&&VillageId='+VillageId+'&&FirstName='+FirstName+'&&OtherNames='+OtherNames+'&&Surname='+Surname+
    '&&CellNo='+PhoneNumber+'&&DOB='+DOB+'&&NationalId='+NationalId+'&&EmailAddress='+EmailAddress+'&&Gender='+Gender
    +'&&LevelOfEducation='+LevelOfEducation+'&&EmploymentStatus='+EmployementStatus+'&&PostalAddress='+PostalAddress+
    '&&BusinessName='+BusinessName+'&&BRegDate='+BRegDate+'&&BusinessKRAPIN='+BKRAPIN+'&&FormOfBusiness='+FormOfBusiness+
    '&&BusinessType='+BusinessTypeId+'&&securityQuestion='+SecurityQuestion+'&&securityAnswer='+SecurityAnswer+'&&PIN='+PIN+'&&personalKRA='+personalKRA+'&&Telephone1='+AlternativePhoneNumber+'&&LegalStatus='+LegalStatus+'&&BusinessRegistrationNo='+RegistrationNo+'&&BusinessPhysicalAddress='+BusinessPhysicalAddress+'');
  }
  registerWebCompany(ClientTypeId,CompanyName,CompanyCertNumber,RegDate,KRAPIN,FormOfBusiness,BusinessTypeId,SubCountyId,WardId,VillageId,CellNumber,EmailAddress,PostalAddress,securityQuestion,securityAnswer,PIN,Telephone2,ContantPerson,ContantPersonPosition){
    return this.http.get('http://3.13.237.46/demo/app/newCompany?ClientTypeId='+ClientTypeId+'&&CompanyName='+CompanyName+
    '&&CompanyCertNumber='+CompanyCertNumber+'&&RegDate='+RegDate+'&&KRAPIN='+KRAPIN+'&&FormOfBusiness='+FormOfBusiness+
    '&&BusinessType='+BusinessTypeId+'&&SubCountyId='+SubCountyId+'&&WardId='+WardId+'&&VillageId='+VillageId+'&&CellNumber='+
    CellNumber+'&&EmailAddress='+EmailAddress+'&&PostalAddress='+PostalAddress+'&&securityQuestion='+securityQuestion+
    '&&securityAnswer='+securityAnswer+'&&PIN='+PIN+'&&Telephone1='+Telephone2+'&&ContantPerson='+ContantPerson+'&&ContantPersonPosition='+ContantPersonPosition+'');
  }
  getMemberPendingAppraisals(memberId){
      return this.http.get('http://micropointlive.com/Demo/Loan/getAllLoansForEachMember?MemberId='+memberId);
  }
  getLoanAppDetails(LoanId){
    return this.http.get('http://micropointlive.com/Demo/Loan/getLoansByLoanId?LoanId=' + LoanId);
  }
}