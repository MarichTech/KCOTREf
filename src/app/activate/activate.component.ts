import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  storedEmail:any;
  code:any;
  activeCode:any;
    empty:any;
    invalidCode:any;
    touched:any;
    memberId:any;
    mobile:any;
    spinnerContent:any;
  constructor(private service:UserService,private navCtrl:NgxNavigationWithDataComponent,private spinner:NgxSpinnerService,private alert2:AlertService) {

   }

  ngOnInit(): void {
    console.log(this.navCtrl.data);
    this.activeCode=this.navCtrl.get('activeCode');
    this.storedEmail=this.navCtrl.get('email');
    this.memberId=this.navCtrl.get('memberId');
    this.mobile=this.navCtrl.get('mobile');
    this.spinnerContent="";
  }
  Activate(code){
    this.touched=true;
    if(code){
      this.spinner.show();
      this.spinnerContent="Activation initiated..";
    
  
  if (this.activeCode==code){
      console.log('memberid='+this.memberId);
      this.service.isVerified(this.memberId).subscribe((Response)=>{
      this.spinner.hide();
      this.alert2.success('Account Activation Success.You can now access your accounts on the app.');
      this.navCtrl.navigate('Home');
      window.localStorage.setItem('Code',this.activeCode)
  });
  }else if (this.activeCode!=code){
    this.spinner.hide();
    this.alert2.danger('Invalid details.Verfication code invalid');
  }
}
}
}
