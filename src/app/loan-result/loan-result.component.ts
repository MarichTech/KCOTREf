import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-loan-result',
  templateUrl: './loan-result.component.html',
  styleUrls: ['./loan-result.component.css']
})
export class LoanResultComponent implements OnInit {
  status:any;
  subTitle:any;
  mobileNo:any;
  message:any;

  constructor(private navCtrl:NgxNavigationWithDataComponent) {
    this.status= this.navCtrl.get('status');
    this.subTitle= this.navCtrl.get('subTitle');
    this.message=this.navCtrl.get('message');
   }

  ngOnInit(): void {
    console.log('status='+this.status);
    console.log('subtitle='+this.subTitle);
    console.log('message='+this.message);
  }
  Pop(){
    this.navCtrl.navigate('Home');
}

}
