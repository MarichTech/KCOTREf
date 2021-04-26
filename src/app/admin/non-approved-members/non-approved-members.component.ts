import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/shared/admin-service.service';

@Component({
  selector: 'app-non-approved-members',
  templateUrl: './non-approved-members.component.html',
  styleUrls: ['./non-approved-members.component.css']
})
export class NonApprovedMembersComponent implements OnInit {
  
  public  NotApprovedList: Object;//change to Object if using data tables
  public temp: Object=false;
  spinnerContent:any;
  UserName:any;

  isDisconnected: boolean = false;
  Today:any;
  welcomeNote:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;


  constructor(public service : AdminServiceService,private router:Router,private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar) { 
    this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';
    }

  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
    this.getTime();
    this.getData();
    this.NotApprovedList=[];
  }

  openSnackBar(message){
    this._snackBar.open(message, 'Ok',{
      duration:4000,
      horizontalPosition: 'center',
      verticalPosition:'top'
    });
  }


  getData(){
    this.spinnerContent='Loading Members....';
    this.spinner.show();
    this.service.GetNonApprovedMembers().subscribe(Response => {
      this.spinner.hide();
      this.NotApprovedList = Response;
      this.temp = true;
    },(error)=>{
      this.spinner.hide();
      this.isDisconnected=true;
    });
  }
  
  onApproveMember(MemberId, Email){
    this.spinnerContent='Approving Member....';
    this.spinner.show();
    this.service.ApproveMember(MemberId, Email).subscribe(Response => {

      this.Resp = Response;
      this.IsSuccess = this.Resp['IsSuccess'];
      
      this.ErrorDescription = this.Resp['ErrorDescription'];

      if (this.IsSuccess==false && this.ErrorDescription!=''){
        this.openSnackBar(this.ErrorDescription);
        this.spinner.hide();
        return;
       }
     if (this.IsSuccess==true){
      this.toastr.success('Member Approved','');
      this.getData();
      this.spinner.hide();
     }

    },(error)=>{
      this.spinner.hide();
      this.isDisconnected=true;
    });
  }

  onView(MemberId){
    localStorage.setItem('NonApprovedMemberId', MemberId.toString());
    this.router.navigate(['/N-MemberDetails']);
  
  }

  getTime(){
    let date=new Date();
    let time=new Date().toISOString();
       this.Today=time;
    console.log(this.Today);
    if(date.getHours()<=10){
        this.welcomeNote='Good Morning, ';
    }else if (date.getHours()>=11&&date.getHours()<12){
      this.welcomeNote='Good Mid Morning, ';
    }else if (date.getHours()>=12&&date.getHours()<=18){
      this.welcomeNote='Good Afternoon, ';
    }else if (date.getHours()>=19&&date.getHours()<=24){
      this.welcomeNote='Good Evening, ';
    }
  }

  Reload(){
    window.location.reload();
    //this.router.navigate(['/A-Dashboard']);
  }


}

