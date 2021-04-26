import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/shared/admin-service.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  UserName: any="";
  Password: any="";
  LoginError: any="Fill all fields";
  isValid: boolean=true;

  isDisconnected: boolean = false;

  spinnerContent:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;

 

  constructor(public service : AdminServiceService,private router:Router,private toastr:ToastrService,
    private spinner:NgxSpinnerService, private _snackBar: MatSnackBar) {
      this.spinner.hide();
      this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';
     }

  ngOnInit(): void {
    if(localStorage.getItem('Role') == 'Admin'){
      this.router.navigate(['/A-Dashboard']);
    }else{
    window.localStorage.clear();
    }
  }

  openSnackBar(message){
    this._snackBar.open(message, 'Ok',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    });
  }

  submit(UserName, Password){
    //this.router.navigate(['/A-Dashboard']);
    if(this.formValidation()){
    
      this.spinnerContent='Logging In....';
      this.spinner.show();
      this.service.AdminLogin(UserName, Password).subscribe(Response => {

        this.Resp = Response;
        this.IsSuccess = this.Resp['IsSuccess'];
        
        this.ErrorDescription = this.Resp['ErroMassage'];
  
        if (this.IsSuccess==false && this.ErrorDescription!=''){
          this.openSnackBar(this.ErrorDescription);
          this.spinner.hide();
          return;
         }
       if (this.IsSuccess==true){
        this.spinner.hide();
        this.router.navigate(['/A-Dashboard']);
        window.localStorage.setItem('UserName', UserName);
        window.localStorage.setItem('Role', 'Admin');
       }
  


        

      },(error)=>{
        this.spinner.hide();
        this.isDisconnected=true;
      });

    }
  }

  formValidation(){
    this.isValid=true;
    if(this.UserName ==""){
      this.isValid=false;
      this.LoginError = "Please enter UserName!";
    }

    if(this.UserName.length <3 && this.UserName !=""){
      this.LoginError = "UserName is short";
      this.isValid=false;
    }

    if(this.Password ==""){
      this.LoginError = "Please enter Password!";
      this.isValid=false;
    }

    if(this.Password.length <3 && this.Password !=""){
      this.LoginError = "Password is short";
      this.isValid=false;
    }
    return this.isValid;

  }
  Reload(){
    window.location.reload();
    //this.router.navigate(['/A-Dashboard']);
  }
}
