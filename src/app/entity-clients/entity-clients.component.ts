import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-entity-clients',
  templateUrl: './entity-clients.component.html',
  styleUrls: ['./entity-clients.component.css']
})
export class EntityClientsComponent implements OnInit {

  public  EntityClientsList: Object;//change to Object if using data tables
  public temp: Object=false;
  spinnerContent:any;
  UserName:any;

  isDisconnected: boolean = false;
  Today:any;

  IsSuccess: any;
  ErrorDescription:any;
  Resp: any;


  constructor(private toastr: ToastrService,private spinner:NgxSpinnerService,
    private _snackBar: MatSnackBar, public userService: UserService, private router:Router) { 
    this.spinnerContent='';
      this.IsSuccess = false;
      this.isDisconnected=false;
      this.ErrorDescription ='';

    }

  ngOnInit(): void {
    this.UserName = localStorage.getItem('UserName');
    this.getData();
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
    this.userService.getMembersByClientType(2).subscribe(Response => {
      this.spinner.hide();
      this.EntityClientsList = Response;
      this.temp = true;
    },(error)=>{
      this.spinner.hide();
      this.isDisconnected=true;
    });
  }
  
  getClientType(id: any) : string {
    var name: string;

    if(id == 1){
      name="Individual";  
    }
    if(id == 2){
      name ="Entity";
    }
    return name;
  }

  onView(MemberId, NationalId){
    localStorage.setItem('viewMemberId', MemberId);
    localStorage.setItem('viewNatIdNo', NationalId);
    this.router.navigate(['/ViewClient']);
  }

  Reload(){
    window.location.reload(); 
  }


}


