import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { ActivateComponent } from '../activate/activate.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ForgotPinComponent } from '../forgot-pin/forgot-pin.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SitemappingComponent } from '../sitemapping/sitemapping.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  NatIdNo:any;
  PIN:any;
  resPIN:any;
  respData:any;
  isconnecting:any;
  errMessage:any;
  touched:any;
  resCellNo:any;
  resDOB:any;
  resEmail:any;
  resErrorDescription:any;
  resFirstName:any;
  resIsSuccess:any;
  resMemberId:any;
  resNatId:any;
  resOtherNames:any;
  resSurname:any;
  isVerified:any;
  activeCode:any;
  storage:any;
  cellRaw:any;
  ctryCode:any;
  mobileWithCode:any;
  storageMembId:any;
  Today:any;
  enteredNatId:any;
  spinnerContent:any;
  resData:any;
  resLastName:any;
  resSecretQstn:any;
  resSecretAnswer:any;
  isLoginError:any;

  constructor(private service:UserService, private router:Router,private toastr:ToastrService,private navCtrl:NgxNavigationWithDataComponent, private spinner:NgxSpinnerService,
    public dialog:MatDialog) {
    this.isconnecting=false;
    this.errMessage=null;
    this.touched=false;
    this.spinnerContent='';
    this.spinner.hide();
    //window.localStorage=window.localStorage;
   }

  ngOnInit(): void {
    
    this.spinner.hide();
    if(localStorage.getItem('Role') != ''){
      if(localStorage.getItem('Role') == 'User'){this.router.navigate(['/Home']);}
      if(localStorage.getItem('Role') == 'Admin'){this.router.navigate(['/A-Dashboard']);}
      
    }else{
      window.localStorage.clear();
      let date=new Date();
      let time=new Date().toISOString();
         this.Today=time;
    }
  }



  submit(NatIdNo,PIN){
    this.touched=true;
    if (NatIdNo!=null && NatIdNo!=""&&PIN!=null && PIN!=""){
    this.isconnecting=true;
    if(NatIdNo!=null && PIN!=null){
      this.service.getCustViaNationIdNo(NatIdNo).subscribe((Response)=>{
        this.isconnecting=false;  
        console.log(Response);
          this.respData=Response;
          this.resPIN=this.respData['PIN'];
          this.resCellNo=this.respData['CellNo'];
          this.resDOB=this.respData['DOB'];
          this.resEmail=this.respData['EmailAddress'];
          this.resErrorDescription=this.respData['ErrorDescription'];
          this.resFirstName=this.respData['FirstName'];
          this.resIsSuccess=this.respData['IsSuccess'];
          this.resMemberId=this.respData['MemberId'];
          this.resNatId=this.respData['NationalId'];
          this.resOtherNames=this.respData['OtherNames'];
          this.resPIN=this.respData['PIN'];
          this.resSurname=this.respData['Surname'];
          this.isVerified=this.respData['IsVerified'];
          this.activeCode =this.respData['ActivationCode'];
          console.log('resPIN='+this.resPIN);
          //if(this.resPIN==PIN)
          if(this.resMemberId>0)
          {
            //activation goes here
            /*
            if(this.isVerified==null||this.isVerified==0){
                this.service.isVerified(this.resMemberId).subscribe((Response)=>{
                  console.log(Response);
                  this.respData=Response;
                  this.resIsSuccess=this.respData['IsSuccess'];
                  this.resErrorDescription=this.respData['ErrorDescription'];
                  if(this.resIsSuccess==true&&this.activeCode!=null){
                    let data={
                      activeCode:this.activeCode,
                      email:this.resEmail,
                      mobile: this.resCellNo,
                      memberId:this.resMemberId
                    }
                    this.navCtrl.navigate('Activate',data);
                  }else{
                      this.errMessage='Error: Something went wrong.Try activation Later.'
                      return;
                  }

                });
            }*/
             //kenyanized mobile number
         // this.cellRaw=this.resCellNo.substring(1,10);
          this.ctryCode='254';
          this.mobileWithCode=this.ctryCode+this.cellRaw;
          
           window.localStorage.setItem('mobileWithCode',this.mobileWithCode);
           window.localStorage.setItem('MemberNo',this.respData['MemberNo']); 
           window.localStorage.setItem('PIN',this.resPIN);         
           window.localStorage.setItem('firstName',this.resFirstName);
           window.localStorage.setItem('otherNames',this.resOtherNames);
           window.localStorage.setItem('lastName',this.resSurname);
           window.localStorage.setItem('email',this.resEmail);
           window.localStorage.setItem('DOB',this.resDOB);
           window.localStorage.setItem('natIdNo',this.resNatId);
           window.localStorage.setItem('CellNo',this.resCellNo);
           window.localStorage.setItem('MemberId',this.respData['MemberId']); 
           window.localStorage.setItem('Role', 'User');
           this.storageMembId=this.resMemberId;
           console.log('Member ID='+this.storageMembId);
           console.log('Member No='+this.respData['MemberNo']);
            
              this.navCtrl.navigate('Home');
          }else if(this.resPIN!=PIN&&PIN!=undefined) {
            this.errMessage="Invalid  Login Details. Try again";
          }else{
            this.errMessage="Invalid login credentials";
            //window.alert("Login failed");
          }

      },(error)=>{
        this.isconnecting=false;
          //this.hasError=true;
          this.errMessage='Connection with server could not be established. Check network setItemtings and try Login again.';
    });
    }
   }
  }
  forgotPin()
  {
    this.enteredNatId= window.prompt('Please enter your national id number');
    console.log(this.enteredNatId);
    if (this.enteredNatId){
    this.spinnerContent='Verifying details..';
    this.spinner.show();

            this.service.sendCodeviaIdNo(this.enteredNatId).subscribe((Response)=>{
              this.spinner.hide();
              console.log(Response);

              this.resData=Response;
              this.resMemberId=this.resData["MemberId"];
              this.resErrorDescription=this.resData["ErrorDescription"];

              if(this.resMemberId==0&&this.resErrorDescription==" member number could not be found"){
                window.alert('Invalid personal details.Please verify and Try again.');  
                return;
              }else if(this.resMemberId==0&&this.resErrorDescription=="Member NOT registered"){
                window.alert('Invalid Registration Details.');
                return;
              }else if(this.resErrorDescription=="Length of the data to decrypt is invalid."){
                window.alert('OOPs! Something went wrong.Please try again later');
                return;
              }else {
                console.log('member number ='+this.resData['MemberNo']);
                this.resMemberId=this.resData["MemberId"];
              this.resFirstName=this.resData["FirstName"];
              this.resLastName=this.resData["Surname"];
              this.resOtherNames=this.resData["OtherNames"];
              this.resEmail=this.resData["EmailAddress"];
              this.resDOB=this.resData["DOB"];
              this.resCellNo=this.resData["CellNo"];
              this.resNatId=this.resData["NationalId"];
              this.resPIN=this.resData["PIN"];
              this.resSecretQstn=this.resData["SecretQuestion"];
              this.resSecretAnswer=this.resData["SecretAnswer"];
              this.resErrorDescription=this.resData["ErrorDescription"];
              this.resIsSuccess=this.resData["IsSuccess"];
              this.activeCode=this.resData["ActivationCode"];

              console.log('Member Id='+this.resMemberId);
              let data1= {
                memberno:this.resData['MemberNo'],
                MemberId:this.resMemberId,
                firstName:this.resFirstName,
                surname:this.resLastName,
                otherNames:this.resOtherNames,
                cellNo:this.resCellNo,
                secretQstn:this.resSecretQstn,
                secretAnswer:this.resSecretAnswer,
                natIdNo:this.resNatId,
                dob:this.resDOB,
                pin:this.resPIN,
                email:this.resEmail,
                ActivationCode:this.activeCode
              }
              this.navCtrl.navigate(ForgotPinComponent,data1);
              }
            },(error)=>{
              this.spinner.hide();
              setTimeout(()=>{
                window.alert('Connection with server could not be established. Check network settings and try Login again.')
                },500);
            });
      }else{
    window.alert('National Id cannot be null');
  }
}
  signUp(){
    this.navCtrl.navigate('Register');
  }

  openAdmin(){
    this.router.navigate(['/A-SignIn']);
  }
 
  opensiteMap(mappingIndex){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="55%";
    dialogConfig.data={mappingIndex};
    this.dialog.open(SitemappingComponent,dialogConfig)

  }

  openHelp(){
    this.router.navigate(['/help']);
  }

  
}
