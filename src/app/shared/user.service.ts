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

  getMemberProfile(MemberId):any{
    return this.http.get('http://3.13.237.46/demo/App/getMemberProfile?memberId='+MemberId);
    //http://localhost:51042/App/getMemberProfile?memberId=53
  }

  updateMemberProfile(memberId,mobileNo,Telephone1,EmailAddress,LevelofEducation,PostalAddress,KRAPIN){
    return this.http.get('http://micropointlive.com/demo/App/UpdateUserProfile?memberId='+memberId+'&&mobileNo='+mobileNo+'&&Telephone1='+Telephone1+'&&EmailAddress='+EmailAddress+'&&LevelofEducation='+LevelofEducation+'&&PostalAddress='+PostalAddress+'&&KRAPIN='+KRAPIN+'');
    //http://localhost:51042/App/UpdateUserProfile?memberId=53&&mobileNo=0738087365&&Telephone1=60333&&EmailAddress=gfgg1@gmail.com&&LevelofEducation=compus&&PostalAddress=135&&KRAPIN=11222&&securityQuestion=0653434&&securityAnswer=1''
  }

  getMemberBusinessDetails(MemberId):any{
    return this.http.get('http://3.13.237.46/demo/App/getMemberBusinessDetails?memberId='+MemberId);
    //http://localhost:51042/App/getMemberBusinessDetails?memberId=53
  }

  updateMemberBusinessDetails(memberId,BusinessName,LegalStatus,FormOfBusiness,RegistrationNo,RegDate,KRAPIN,physicalAddress,BusinessType){
    return this.http.get('http://micropointlive.com/App/UpdateBusinessProfile?memberId='+memberId+'&&BusinessName='+BusinessName+'&&LegalStatus='+LegalStatus+'&&FormOfBusiness='+FormOfBusiness+'&&RegistrationNo='+RegistrationNo+'&&RegDate='+RegDate+'&&KRAPIN='+KRAPIN+'&&physicalAddress='+physicalAddress+'&&BusinessType='+BusinessType+'');
    //http://localhost:51042/App/UpdateBusinessProfile?memberId=53&&BusinessName=1&&LegalStatus=1&&FormOfBusiness=1&&RegistrationNo=1&&RegDate=1&&KRAPIN=1&&physicalAddress=1&&BusinessType=1

  }

  getCompanyOtherInfo(MemberId):any{
    return this.http.get('http://3.13.237.46/demo/App/getCompanyOtherInfo?MemberId='+MemberId);
    //http://localhost:51042/App/getCompanyOtherInfo?MemberId=48
  }

  updateCompanyOtherInfo(MemberId,PhoneNumber,Email,FormBusiness,PostalAddress,ContactPerson,ContantPersonPosition){
    return this.http.get('http://micropointlive.com/demo/App/UpdateOtherCompanyInfoProfile?MemberId='+MemberId+'&&PhoneNumber='+PhoneNumber+'&&Email='+Email+'&&FormBusiness='+FormBusiness+'&&PostalAddress='+PostalAddress+'&&ContactPerson='+ContactPerson+'&&ContantPersonPosition='+ContantPersonPosition+'');
   //http://localhost:51042/App/UpdateOtherCompanyInfoProfile?MemberId=48&&PhoneNumber=1&&Email=1&&FormBusiness=1PostalAddress=1&&ContactPerson=1&&ContantPersonPosition=1&&SecurityQuestion=1&&SecurityAnswer=1

  }

  getCompanyBusinessDetails(MemberId):any{
    return this.http.get('http://3.13.237.46/demo/App/getCompanyBusinessDetails?MemberId='+MemberId);
    //http://localhost:51042/App/getCompanyBusinessDetails?MemberId=1
  }

  updateCompanyBusinessDetails(MemberId,BusinessType,BusinessName,FormOfBusiness,postalAddress,physicalAddress,LegalStatus,BusinessRegistrationNo){
    return this.http.get('http://micropointlive.com/App/UpdateCompanyBusinessProfile?MemberId='+MemberId+'&&BusinessType='+BusinessType+'&&BusinessName='+BusinessName+'&&FormOfBusiness='+FormOfBusiness+'&&postalAddress='+postalAddress+'&&physicalAddress='+physicalAddress+'&&LegalStatus='+LegalStatus+'&&BusinessRegistrationNo='+BusinessRegistrationNo+'');
    //http://localhost:51042/App/UpdateCompanyBusinessProfile?MemberId=1&&BusinessType=1&&BusinessName=MICROPOINT&&FormOfBusiness=Juakali&&postalAddress=112&&physicalAddress=kwale&&LegalStatus=2&&BusinessRegistrationNo=112
    
  }

  getAllReadNotification(memberId){
    return this.http.get('http://micropointlive.com/Demo/Loan/getAllReadyNotification?MemberId='+memberId);
    //http://localhost:51042/Loan/getAllReadyNotification?MemberId=56
  }

  getUnReadNotification(memberId){
    return this.http.get('http://micropointlive.com/Demo/Loan/getAllUnReadyNotification?MemberId='+memberId);
    //http://localhost:51042/Loan/getAllUnReadyNotification?MemberId=56
  }

  updateNotification(Id){
    return this.http.get('http://micropointlive.com/Demo/Loan/UpdateNotification?Id='+Id);
    //http://localhost:51042/loan/UpdateNotification?Id=2
  }
  
  getAllMembers(){
    return this.http.get('http://micropointlive.com/Demo/app/getAllMember');
     //http://localhost:51042/app/getAllMember
  }
 
  getMembersByClientType(ClientTypeId){
    return this.http.get('http://micropointlive.com/Demo/app/getAllMemberByClientType?ClientTypeId='+ClientTypeId);
    //http://localhost:51042/app/getAllMemberByClientType?ClientTypeId=2
  }
  
  getLoanBalances(memberId){
    return this.http.get('http://micropointlive.com/Demo/Loan/getLoanBalances?memberId='+memberId+'&&UserId='+0+'');
    //http://localhost:51042/loan/getLoanBalances?memberId=69&&UserId=0
  }

  getUserRole(RoleId){
    return this.http.get('http://micropointlive.com/Demo/app/getUserRole?RoleId='+RoleId);
    //http://localhost:51042/app/getUserRole?RoleId=1
  }
  
  
  
  

  
  
  

}
