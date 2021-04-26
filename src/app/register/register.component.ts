import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { UserService } from '../shared/user.service';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  respData:any;
  resMemberId:any;
  resErrorDescription:any;
  resIsSuccess:any;
  resFirstName:any;
  resOtherNames:any;
  resSurname:any;
  resGender:any;
  resDOB:any;
  resEmail:any;
  resNatId:any;
  resPIN:any;
  resCellNo:any;
  netType:any;
  smses:any;
  counter:any=0;
  message1:any;
  touched:any;

  //from interface
  Firstname:any;
  Othernames:any;
  Surname:any;
  NatIdNo:any;
  DOB:any;
  Constituencies:any;
  Constituency:any;
  Wards:any;
  Ward:any;
  Village:any;
  isConnecting:any;
  ClientType:any;
  reqError:any;
  selectedIndex:any;
  BName:any;
  BType:any;
  BRegDate:any;
  BKRA:any;
  BSubCounty:any;
  BVillage:any;
  Gender:any;
  PostalAddress:any;
  EmailAddress:any;
  MobileNo:any;
  LevelOfEducation:any;
  Villages:any;
  BWard:any;
  BusinessTypes:any;
  BWards:any;
  BVillages:any;
  BConstituencies:any;
  BForm:any;
  Empstatus:any;
  SecretQuestn:any;
  SecretAnswer:any;
  PIN:any;
  respRegData:any;
  resActivationCode:any;
  errorMsg:any;
  successMsg:any;
  resRegIsSuccess:any;

  CompanyName:string="";
  CompanyCertNumber:string="";
  CompanyRegDate:any;
  CompanyKRAPIN:string="";
  CompanyBForm:string="";
  CompanyBType:any="";
  CompanyBSubCounty:number=0;
  CompanyBWard:number=0;
  CompanyBVillage:number=0;
  CompanyCellNumber:string="";
  CompanyEmailAddress:string="";
  CompanyPostalAddress:string="";
  ContactPerson:string="";
  ContactPersonPosition:string="";
  
  //add
  personalKRA:any="";
  ConfirmCompanyEmailAddress:any="";
  Telephone1:any="";
  Telephone2:any="";
  LegalStatus:any=0;
  RegistrationNo:any="";
  AlternativePhoneNumber:any="";
  ConfirmEmailAddress:any="";
  showTerm:any=true;
  exceptTerm:any=false
  BusinessPhysicalAddress:any="";
  //
  RegValue:any;
  show:any=false;
  closeTerms:any=true;
 
  
 

  constructor(private snackBar:MatSnackBar, private navCtrl:NgxNavigationWithDataComponent ,private userService:UserService) { 
      this.touched=false;
      this.isConnecting=false;
      this.ClientType=0;
      this.Constituency=0;
      this.Ward=0;
      this.Village=0;
      this.reqError="";
      this.selectedIndex=0;
      this.Firstname="";
      this.Othernames="";
      this.Surname="";
      this.NatIdNo="";
      this.Gender="";
      this.PostalAddress="";
      this.EmailAddress="";
      this.MobileNo="";
      this.LevelOfEducation="";
      this.BName="";
      this.BType="";
      this.BRegDate="";
      this.BKRA="";
      this.BSubCounty=0;
      this.BWard=0;
      this.BVillage=0;
      this.BForm="";
      this.Empstatus="";
      this.SecretQuestn="";
      this.SecretAnswer="";
      this.PIN="";
      this.errorMsg="";
      this.successMsg="";
      this.ContactPerson="";
      this.ContactPersonPosition="";
      this.resRegIsSuccess=false;
      //add
      
  }

  ngOnInit() {
    this.message1='';
    this.userService.getAllEmployers().subscribe((Response)=>{
      this.Constituencies = Response;
    }),(error)=>{
      //do nothing for now
    };
    this.userService.getBusinessTypes().subscribe((Response)=>{
      this.BusinessTypes = Response;
    }),(error)=>{
      //do nothing for now
    };
  }
  loadStations(employerId){
    console.log(employerId);
    if (employerId>0){
    this.userService.getstation(employerId).subscribe((Response)=>{
      this.Wards = Response;
    }),(error)=>{
      //do nothing for now
    };
  }
  }
  loadDepartments(stationId){
    console.log(stationId);
    if (stationId>0){
    this.userService.getDepartments(stationId).subscribe((Response)=>{
      this.Villages = Response;
    }),(error)=>{
      //do nothing for now
    };
  }
  }
  loadBusinessStations(employerId){
    console.log(employerId);
    if (employerId>0){
    this.userService.getstation(employerId).subscribe((Response)=>{
      this.BWards = Response;
    }),(error)=>{
      //do nothing for now
    };
  }
  }
  loadBusinessDepartments(stationId){
    console.log(stationId);
    if (stationId>0){
    this.userService.getDepartments(stationId).subscribe((Response)=>{
      this.BVillages = Response;
    }),(error)=>{
      //do nothing for now
    };
  }
  }
  nextCard(ClientType,Constituency,Ward,Village){
    console.log(ClientType+Constituency+Ward+Village);
    this.reqError="";
    this.ClientType=ClientType;
    if (ClientType==0){
      this.reqError="Please enter your Category**";
    }
    if (ClientType>0&&Constituency==0){
      this.reqError="Please enter your Constituency**";
    }
    if (ClientType>0&&Constituency>0&&Ward==0){
      this.reqError="Please enter your Ward**";
    }
    if (ClientType>0&&Constituency>0&&Ward>0&&Village==0){
      this.reqError="Please enter your Village/Sub-Location**";
    }
    if (this.reqError!=""){
      this.snackBar.open(this.reqError, 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }else{
      //proceed
      this.selectedIndex=1;
    }   
  }
  nextCardPersonal(Firstname,Othernames,Surname,MobileNo,DOB,NatIdNo,EmailAddress,Gender, LevelOfEducation,Empstatus,PostalAddress,BName,
    BRegDate,BKRA,BForm,BType){
    console.log(BType);
    this.reqError="";
    if (Firstname==""&&Othernames==""&&Surname==""){
      if(this.reqError=="")
      this.reqError="Please enter at least two names**";
    }
    if (Firstname!=""&&Othernames==""&&Surname==""){
      if(this.reqError=="")
        this.reqError="Please enter at least two names**";
    }
    if (Firstname==""&&Othernames!=""&&Surname==""){
      if(this.reqError=="")
      this.reqError="Please enter at least two names**";
    }
    if (Firstname==""&&Othernames==""&&Surname!=""){
      if(this.reqError=="")
      this.reqError="Please enter at least two names**";
    }
    if (MobileNo==""){
      if(this.reqError=="")
      this.reqError="Please enter your Mobile Number**";
    }
    if (DOB==null){
      if(this.reqError=="")
      this.reqError="Please enter your D.O.B**";
    }
    if (NatIdNo==""){
      if(this.reqError=="")
      this.reqError="Please enter your National Id Number**";
    }
    /*if (EmailAddress==""){
      if(this.reqError=="")
      this.reqError="Please enter your Email Address**";
    }*/
    if (Gender==""){
      if(this.reqError=="")
      this.reqError="Please enter your Gender**";
    }
    if (LevelOfEducation=="None"||LevelOfEducation==""){
      if(this.reqError=="")
      this.reqError="Please enter your Level of Education**";
    }
    if (Empstatus=="None"||Empstatus==""){
      if(this.reqError=="")
      this.reqError="Please enter your Employment Status**";
    }
    /*if (PostalAddress==""){
      if(this.reqError=="")
      this.reqError="Please enter your Postal Address**";
    }*/
    if(this.LegalStatus==1){
      if (BRegDate==null){
        if(this.reqError=="")
        this.reqError="Please enter your Business Reg. Date**";
      }
      if (BForm=="None"||BForm==""){
        if(this.reqError=="")
        this.reqError="Please enter your Business Form**";
      }

    }
    
  if (BName!=""){
    
    /*if (BKRA==""){
      if(this.reqError=="")
      this.reqError="Please enter your Business KRA PIN Number**";
    }*/   
    if (BType==0){
      if(this.reqError=="")
      this.reqError="Please enter your Business Type**";
    }
    
    //strings/names for physical location of the business
   
  }

    if (this.reqError!=""){
      this.snackBar.open(this.reqError, 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }else{
      //proceed
      this.selectedIndex=2;
    }   
  }
  nextCardCompany(CompanyName,CompanyCertNumber,CompanyRegDate,CompanyKRAPIN,CompanyBForm,CompanyBType,
    CompanyCellNumber,ContactPerson,ContactPersonPosition,CompanyEmailAddress,CompanyPostalAddress){
    this.reqError="";
    if (CompanyName==""){
      this.reqError="Please enter Entity Name**";
    }
    if (CompanyCertNumber==""){
      this.reqError="";
      this.reqError="Please enter Entity Cert. Number**";
    }
    if (CompanyRegDate==null){
      this.reqError="";
      this.reqError="Please enter Entity Reg. Date**";
    }
    if (CompanyKRAPIN==""){
      this.reqError="";
      this.reqError="Please enter Entity KRA PIN**";
    }
    if (CompanyBForm==""){
      this.reqError="";
      this.reqError="Please enter at Form of Business**";
    }
    if (CompanyBType==""){
      this.reqError="";
      this.reqError="Please enter at Business Type**";
    }
    if (CompanyCellNumber==""){
      this.reqError="";
      this.reqError="Please enter Entity Phone Number**";
    }
    if (ContactPerson==""){
      this.reqError="";
      this.reqError="Please enter at Entity Contact Person**";
    }
    if (ContactPersonPosition==""){
      this.reqError="";
      this.reqError="Please enter Entity Contact Person Position**";
    }
    if (CompanyEmailAddress==""){
      this.reqError="";
      this.reqError="Please enter Entity Email Address**";
    }
    if (CompanyPostalAddress==""){
      this.reqError="";
      this.reqError="Please enter Entity Postal Address**";
    }
    if (this.reqError!=""){
      this.snackBar.open(this.reqError, 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }else{
      //jump to tab 3
      this.selectedIndex = 2;
    }

  }
  SaveCompany(CompanyName,CompanyCertNumber,CompanyRegDate,CompanyKRAPIN,CompanyBForm,CompanyBType,
    CompanyCellNumber,CompanyEmailAddress,ContactPerson,ContactPersonPosition,CompanyPostalAddress,SecretQuestn,SecretAnswer,PIN,Telephone2,ConfirmCompanyEmailAddress,exceptTerm){
      this.reqError="";
      if (CompanyName==""){
        this.reqError="Please enter at Company Name**";
      }
      if (CompanyCertNumber==""){
        if(this.reqError=="")
        this.reqError="Please enter at Company Cert. Number**";
      }
      if (CompanyRegDate==null){
        if(this.reqError=="")
        this.reqError="Please enter at Company Reg. Date**";
      }
      if (CompanyKRAPIN==""){
        if(this.reqError=="")
        this.reqError="Please enter at Company KRA PIN**";
      }
      if (CompanyBForm==""){
        if(this.reqError=="")
        this.reqError="Please enter at Form of Business**";
      }
      if (CompanyBType==0){
        if(this.reqError=="")
        this.reqError="Please enter at Business Type**";
      }
      if (CompanyEmailAddress==""){
        if(this.reqError=="")
        this.reqError="Please enter at Company Email Address**";
      }
      if (ContactPerson==""){
        this.reqError="";
        this.reqError="Please enter at Entity Contact Person**";
      }
      if (ContactPersonPosition==""){
        this.reqError="";
        this.reqError="Please enter Entity Contact Person Position**";
      }
      if (CompanyPostalAddress==""){
        if(this.reqError=="")
        this.reqError="Please enter at Company Postal Address**";
      }
      if (this.reqError!=""){
        this.snackBar.open(this.reqError, 'OK', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        //jump to middle tab
        this.selectedIndex=1;
        return;
      }else{
        if(this.ClientType==0){
          if(this.reqError=="")
          this.reqError="Please select Client Type**";
        }
        if(this.Constituency==0){
          if(this.reqError=="")
          this.reqError="Please select Constituency**";
        }
        if(this.Ward==0){
          if(this.reqError=="")
          this.reqError="Please select Ward**";
        }
        if(this.Village==0){
          if(this.reqError=="")
          this.reqError="Please select Village**";
        }
        if (this.reqError!=""){
          this.snackBar.open(this.reqError, 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          //jump to middle tab
          this.selectedIndex=0;
          return;
        }else{
        if (SecretQuestn==""||SecretQuestn=="notSelected"){
          if(this.reqError=="")
          this.reqError="Please select Secret Question**";
        }
        if (SecretAnswer==""){
          if(this.reqError=="")
          this.reqError="Please enter at Secret Answer**";
        }
        if (PIN==""){
          if(this.reqError=="")
          this.reqError="Please enter PIN**";
        }
        if(CompanyEmailAddress != ConfirmCompanyEmailAddress){
          if(this.reqError=="")
          this.reqError="Emails does not match each other.Please enter correct email**";

        }
        if(exceptTerm==false){
          if(this.reqError=="")
          this.reqError="Please Except term and conditions**";

        }
      
        if (this.reqError!=""){
          this.snackBar.open(this.reqError, 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          //jump to middle tab
          //this.selectedIndex=1;
        
          return;
        }else{
          //post details
          this.isConnecting=true;
          this.userService.registerWebCompany(2,CompanyName,CompanyCertNumber,CompanyRegDate,CompanyKRAPIN,CompanyBForm,CompanyBType,
            this.Constituency,this.Ward,this.Village,CompanyCellNumber,CompanyEmailAddress,CompanyPostalAddress,
            SecretQuestn,SecretAnswer,PIN,Telephone2,ContactPerson,ContactPersonPosition) .subscribe((Response)=>{
              this.isConnecting=false;
                console.log(Response);
                this.respRegData=Response;
                this.resActivationCode=this.respRegData['ActivationCode'];
                this.resMemberId=this.respRegData["MemberId"];
                this.resRegIsSuccess=this.respRegData["IsSuccess"];
                this.resErrorDescription=this.respRegData["ErrorDescription"];
                console.log(this.resMemberId);
  
         if (this.resErrorDescription=="Invalid Email Address"){
           this.errorMsg="Please enter email with correct format eg 123@example.com";
            return;
         } 
         if (this.resErrorDescription=="Object reference not set to an instance of an object."){
           this.errorMsg="Registration request was completed with errors. Please try again later";
          return;
         }
         if (this.resErrorDescription=="member is already registered"||this.resErrorDescription=="Member already Registered"){
           console.log(this.resErrorDescription);
           this.errorMsg="Company Account is already registered with us.Please try logging in.";
           this.snackBar.open(this.errorMsg, 'OK', {
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.navCtrl.navigate('Login');
       }
       else if (this.resErrorDescription!=""){
          this.errorMsg=this.resErrorDescription;
       }
       
         
         if (this.resMemberId>0&&this.resErrorDescription==''&&this.resRegIsSuccess==true){
              window.localStorage.setItem('MemberId',this.resMemberId);
              window.localStorage.setItem('firstName',"");
              window.localStorage.setItem('otherNames',"");
              window.localStorage.setItem('lastName',CompanyName);
              window.localStorage.setItem('email',CompanyEmailAddress);
              window.localStorage.setItem('DOB',CompanyRegDate);
              window.localStorage.setItem('natIdNo',CompanyCertNumber);
              window.localStorage.setItem('CellNo',CompanyCellNumber);
              this.successMsg="Registration successful..";
                this.snackBar.open(this.successMsg, 'OK', {
                  duration: 4000,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                });
                let data={
                  activeCode:this.resActivationCode,
                  memberId:this.resMemberId,
                  email:this.resEmail
                }
                this.navCtrl.navigate('Activate',data);
              }
            },(error)=>{
              this.isConnecting=false;
              this.errorMsg="Please check internet settings on your device and try again";
            });
          }
        }
      }
    }
    
  Save(ClientType,Constituency,Ward,Village, Firstname,Othernames,Surname,MobileNo,DOB,NatIdNo,EmailAddress,Gender,LevelOfEducation,Empstatus,PostalAddress,BName,BRegDate,BKRA,BForm, BType,SecretQuestn,SecretAnswer,PIN,
    personalKRA,AlternativePhoneNumber,LegalStatus,RegistrationNo,ConfirmEmailAddress,exceptTerm,BusinessPhysicalAddress){
    this.reqError="";
    if (ClientType==0){
      if(this.reqError=="")
      this.reqError="Please enter your Category**";
    }
    if (Constituency==0){
      if(this.reqError=="")
      this.reqError="Please enter your Constituency**";
    }
    if (ClientType>0&&Constituency>0&&Ward==0){
      this.reqError="Please enter your Ward**";
    }
    if (ClientType>0&&Constituency>0&&Ward>0&&Village==0){
      this.reqError="Please enter your Village/Sub-Location**";
    }
    if (this.reqError!=""){
      this.snackBar.open(this.reqError, 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      //jump to first tab
      this.selectedIndex=0;
      return;
    }else{
        if (Firstname==""&&Othernames==""&&Surname==""){
          if(this.reqError=="")
          this.reqError="Please enter at least two names**";
        }
        if (Firstname!=""&&Othernames==""&&Surname==""){
          if(this.reqError=="")
            this.reqError="Please enter at least two names**";
        }
        if (Firstname==""&&Othernames!=""&&Surname==""){
          if(this.reqError=="")
          this.reqError="Please enter at least two names**";
        }
        if (Firstname==""&&Othernames==""&&Surname!=""){
          if(this.reqError=="")
          this.reqError="Please enter at least two names**";
        }
        if (MobileNo==""){
          if(this.reqError=="")
          this.reqError="Please enter your Mobile Number**";
        }
        if (DOB==null){
          if(this.reqError=="")
          this.reqError="Please enter your D.O.B**";
        }
        if (NatIdNo==""){
          if(this.reqError=="")
          this.reqError="Please enter your National Id Number**";
        }
        if(EmailAddress !=ConfirmEmailAddress){
          if(this.reqError=="")
          this.reqError="Email does match.Please enter correct email"; 
        }
        if(exceptTerm==false){
          if(this.reqError=="")
          this.reqError="Please Except term and conditions**";

        }
        /*if (EmailAddress==""){
          if(this.reqError=="")
          this.reqError="Please enter your Email Address**";
        }*/
        if (Gender==""){
          if(this.reqError=="")
          this.reqError="Please enter your Gender**";
        }
        if (LevelOfEducation=="None"||LevelOfEducation==""){
          if(this.reqError=="")
          this.reqError="Please enter your Level of Education**";
        }
        if (Empstatus=="None"||Empstatus==""){
          if(this.reqError=="")
          this.reqError="Please enter your Employment Status**";
        }
        /*if (PostalAddress==""){
          if(this.reqError=="")
          this.reqError="Please enter your Postal Address**";
        }*/
        
      if (BName!=""){
        /*if (BKRA==""){
          if(this.reqError=="")
          this.reqError="Please enter your Business KRA PIN Number**";
        }*/
       
        if (BType==""){
          if(this.reqError=="")
          this.reqError="Please enter your Business Type**";
        }
        
        //strings/names for physical location of the business
        
    }
  
      if (this.reqError!=""){
        this.snackBar.open(this.reqError, 'OK', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        //jump to tab 2
        this.selectedIndex=1;
        return;
    }else{
        console.log('Secret qstn'+SecretQuestn);
        if(SecretQuestn==""||SecretQuestn=="notSelected"){
          this.reqError="Please select Secret Question";
        }
        if (SecretAnswer==""){
          if(this.reqError=="")
          this.reqError="Please enter your Secret Answer**";
        }
        if (PIN==""){
          if(this.reqError=="")
          this.reqError="Please enter PIN**";
        }
        if (this.reqError!=""){
          this.snackBar.open(this.reqError, 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          return;
      }else{
        //data clean and ready for uploading
        this.isConnecting=true;
        this.userService.registerWebMember(ClientType,Constituency,Ward,Village,Firstname,Othernames,Surname,MobileNo,DOB,NatIdNo,
          EmailAddress,Gender,LevelOfEducation,Empstatus,PostalAddress,BName,BRegDate,BKRA,BForm,BType,
          SecretQuestn,SecretAnswer,PIN,personalKRA,AlternativePhoneNumber,LegalStatus,RegistrationNo,BusinessPhysicalAddress).subscribe((Response)=>{
            this.isConnecting=false;
              console.log(Response);
              this.respRegData=Response;
              this.resActivationCode=this.respRegData['ActivationCode'];
              this.resMemberId=this.respRegData["MemberId"];
              this.resRegIsSuccess=this.respRegData["IsSuccess"];
              this.resErrorDescription=this.respRegData["ErrorDescription"];
              console.log(this.resMemberId);

       if (this.resErrorDescription=="Invalid Email Address"){
         this.errorMsg="Please enter email with correct format eg 123@example.com";
          return;
       } 
       if (this.resErrorDescription=="Object reference not set to an instance of an object."){
         this.errorMsg="Registration request was completed with errors. Please try again later";
        return;
       }
       if (this.resErrorDescription=="member is already registered"||this.resErrorDescription=="Member already Registered"){
         console.log(this.resErrorDescription);
         this.errorMsg="Registration Failed. Your account is already registered with us.Please try logging in.";
         this.snackBar.open(this.errorMsg, 'OK', {
          duration: 6000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.navCtrl.navigate('Login');
     }
     else if (this.resErrorDescription!=""){
        this.errorMsg=this.resErrorDescription;
     }
     if(this.errorMsg!=""){
      this.snackBar.open(this.errorMsg, 'OK', {
        duration: 6000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
     }
     
       
       if (this.resMemberId>0&&this.resErrorDescription==''){
           if (this.resRegIsSuccess==true){
            window.localStorage.setItem('MemberId',this.resMemberId);
            window.localStorage.setItem('firstName',Firstname);
            window.localStorage.setItem('otherNames',Othernames);
            window.localStorage.setItem('lastName',Surname);
            window.localStorage.setItem('email',EmailAddress);
            window.localStorage.setItem('DOB',DOB);
            window.localStorage.setItem('natIdNo',NatIdNo);
            window.localStorage.setItem('CellNo',MobileNo);
            this.successMsg="Registration successful..";
              this.snackBar.open(this.successMsg, 'OK', {
                duration: 4000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              });
              let data={
                activeCode:this.resActivationCode,
                memberId:this.resMemberId,
                email:this.resEmail
              }
              this.navCtrl.navigate('Activate',data);
       }
      }
    },(error)=>{
            this.isConnecting=false;
            this.errorMsg="Please check internet settings on your device and try again";
          });
      }   
    }
   }   
  }
  
  getId(id: number) {
   
    this.RegValue = id;
    if(this.RegValue==1){
      this.show=true;
    } 
    else{
      this.show=false;
    }  
  } 
  onlyNumbersAllowed(event):boolean
  {
    const charCode =(event.which)?event.which:event.keyCode;
    if(charCode >31 && (charCode <48 || charCode>57)){
      console.log(charCode)
      return false;
    }
    return true;

  }
  
 
 
}
