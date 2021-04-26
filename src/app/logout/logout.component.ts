import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private navCtrl:NgxNavigationWithDataComponent) { }

  ngOnInit(): void {
    console.log('Logging out..');
      this.navCtrl.navigate('');
      window.localStorage.clear();
  }

}
