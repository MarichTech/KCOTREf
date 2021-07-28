import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgIdleModule } from '@ng-idle/core';
import { BnNgIdleService } from 'bn-ng-idle';
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
  pageUrl :string='';

  constructor(private navCtrl:NgxNavigationWithDataComponent, private idleService :BnNgIdleService, private router: Router, private snackbar: MatSnackBar){
    this.showSplash=true;
    this.ngOninit();
  }
  ngOninit(){
    console.log('app loaded....');
    console.log('at '+this.router.url);
    this.idleService.startWatching(600).subscribe((isTimeOut:boolean)=>{
      if (isTimeOut == true){
         if (this.router.url != null && this.router.url !='/'){
          console.log('times up!');
          console.log('at '+this.router.url);
          window.localStorage.clear();
          this.snackbar.open('Session Expired. Please Login again to proceed.', 'OK', {
            duration: 6000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.navCtrl.navigate('');
         }
      }
    })
    timer(6000).subscribe(()=>{
      this.showSplash=false;
      this.navCtrl.navigate('');
    });
  }
}