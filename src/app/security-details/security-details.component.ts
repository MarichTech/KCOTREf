import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.css']
})
export class SecurityDetailsComponent implements OnInit {
  nationalId:any=0;
  firstName:any;
  middleName:any;
  surName:any;
  dob:any;
  gender:any;
  respData:any;
  resMemberId:any;
  resIsSuccess:any;
  resErrorDescription:any;
  resFirstName:any;
  resOtherNames:any;
  resSurname:any;
  resGender:any;
  resDOB:any;
  resEmail:any;
  resNatId:any;
  resPIN:any;
  resCellNo:any;
  dPlatform:any;
  dSerial:any;
  dManufacturer:any;
  dModel:any;
  dIsVirtual:any;
  dVersion:any;
  dUUID:any;
  respCustData:any;
  resActivationCode:any;
  memberNo:any;
  message1:any;
  touched:any;
  spinnerContent:any;
  errorMsg:any;
  successMsg:any;
//from interface
  Cellno:any;
  SecretQuestn:any;
  SecretAnswer:any;
  PIN:any;
  notSelected:any;
  email:any;


  constructor(private navCtrl:NgxNavigationWithDataComponent, private spinner:NgxSpinnerService, private lenderService:UserService) {
    this.nationalId=this.navCtrl.get('nationalId');
    this.firstName=this.navCtrl.get('firstName');
    this.middleName=this.navCtrl.get('middleName');
    this.surName=this.navCtrl.get('surName');
    this.dob=this.navCtrl.get('dob');
    this.spinnerContent="";
    this.errorMsg="";
    this.successMsg="";
    this.touched=false;
    this.resIsSuccess=false;
   }

  ngOnInit(): void {
    window.localStorage.clear();
    console.log('National Id='+this.nationalId);
    console.log('firstName='+this.firstName);
    console.log('middleName='+this.middleName);
    console.log('surName='+this.surName);
    console.log('dob='+this.dob);
  }

  addCustomer(CellNo,email,SecretQuestn,SecretAnswer,PIN){
    this.touched=true;
    if(this.touched&&CellNo&&SecretQuestn!='notSelected'&&SecretAnswer&&PIN){
      this.spinner.show();
      this.spinnerContent="Processing Registration....";

   this.lenderService.regCustomerNew(this.nationalId,this.surName,this.middleName,this.firstName,CellNo,this.dob,PIN,email,SecretQuestn,SecretAnswer).subscribe(Response=>{
    this.spinner.hide(); 
    console.log(Response);

       this.respData=Response;
       this.resActivationCode=this.respData['ActivationCode'];
       this.resMemberId=this.respData["MemberId"];
       this.resIsSuccess=this.respData["IsSuccess"];
       this.resErrorDescription=this.respData["ErrorDescription"];
       console.log(this.resMemberId);

       if (this.resErrorDescription=="Invalid Email Address"){
         this.errorMsg="Invalid Email Address. Enter email with correct format";
          return;
       } 
       if (this.resErrorDescription=="No match found"){
         this.errorMsg="Match not Found. Details provided didnt match with our records. Try Again";
          return;
       }
       if (this.resErrorDescription=="Object reference not set to an instance of an object."){
         this.errorMsg="Process failed. Your registration request was completed with errors. Please try again later";
        return;
     }
       if (this.resErrorDescription=="member is already registered"||this.resErrorDescription=="Member already Registered"){
         console.log(this.resErrorDescription);
         this.errorMsg="Registration Failed. Your account is already registered with us.Please try logging in.";
        this.navCtrl.navigate('Login');
     }
     else if (this.resErrorDescription!=''&&this.resErrorDescription!=null)
     {
       this.errorMsg="Registration Failed. Invalid registration details were found.Please confirm details and try again.";
     }
       
       if (this.resMemberId>0&&this.resErrorDescription==''){
           if (this.resIsSuccess==true){
            window.localStorage.setItem('MemberId',this.resMemberId);
            window.localStorage.setItem('firstName',this.firstName);
            window.localStorage.setItem('otherNames',this.middleName);
            window.localStorage.setItem('lastName',this.surName);
            window.localStorage.setItem('email',email);
            window.localStorage.setItem('DOB',this.dob);
            window.localStorage.setItem('natIdNo',this.nationalId);
            window.localStorage.setItem('CellNo',CellNo);
            this.successMsg="Registration successful..";
       }
      }
   },(error)=>{
     this.spinner.hide();
     this.errorMsg="Something went wrong.Try activation Later.";
   });
 }
}
goToActivatePage(){
  let data={
    activeCode:this.resActivationCode,
    memberId:this.resMemberId,
    email:this.resEmail
  }
  this.navCtrl.navigate('Activate',data);
}


}
