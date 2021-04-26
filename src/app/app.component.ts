import { Component } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  showSplash:any;

  constructor(private navCtrl:NgxNavigationWithDataComponent){
    this.showSplash=true;
    this.ngOninit();
  }
  ngOninit(){
    console.log('app loaded....');
    timer(6000).subscribe(()=>{
      this.showSplash=false;
      this.navCtrl.navigate('');
    });
  }
}
