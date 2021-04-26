import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-loan-nominations',
  templateUrl: './loan-nominations.component.html',
  styleUrls: ['./loan-nominations.component.css']
})
export class LoanNominationsComponent implements OnInit {

  LoanId:any;
  LoanAmount:any;
  ApplicationDate:any;
  respData:any;
  connecting:any;
  disconnected:any;
  constructor(private service:UserService,private navCtrl:NgxNavigationWithDataComponent) {
    this.LoanId=this.navCtrl.get('LoanId');
    this.LoanAmount=this.navCtrl.get('LoanAmount');
    this.ApplicationDate=this.navCtrl.get('ApplicationDate');
    this.connecting=true;
   }

  ngOnInit(): void {
    this.getLoanNominations(this.LoanId);
  }
  getLoanNominations(LoanId){
    if(LoanId>0){
      this.service.getLoanNominations(LoanId).subscribe((Response)=>{
        this.connecting=false;
        this.respData=Response;
        console.log(Response);
      },(error)=>{
        this.connecting=false;
        this.disconnected=true;
      });
    }
  }
  Reload(){
    this.navCtrl.navigate('LoanNominations');
  }

}
