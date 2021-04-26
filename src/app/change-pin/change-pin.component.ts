import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.css']
})
export class ChangePINComponent implements OnInit {
    storedMemberId:any;
    touched:any;
    rPin:any;
    rData:any;
    respData:any;
    isSusccess:any;
    isProcessing:any;
    processingMsg:any;
    errorMsg:any;
    successMsg:any;
    newPIN:any;
    confirmedPIN:any;
    oldPin:any;

  constructor(private lenderService:UserService, private navCtrl:NgxNavigationWithDataComponent) {
      this.storedMemberId=window.localStorage.getItem('MemberId');
      console.log('stored memberid=!!'+this.storedMemberId);
      this.processingMsg="";
      this.isProcessing=false;
      this.errorMsg="";
      this.successMsg="";
      this.touched=false;
   }

  ngOnInit(): void {
        this.isProcessing=true;
        this.processingMsg='Please wait, Retrieving details...';
        this.lenderService.getCustViaMemberID(this.storedMemberId).subscribe((Response)=>{
        console.log(Response);
        this.isProcessing=false;
        this.processingMsg="";
        this.rData=Response;
        this.rPin=this.rData['PIN'];
        console.log('rPin=='+this.rPin);
    },(error)=>{
        this.isProcessing=false;
        this.processingMsg="";
        this.errorMsg="Connection with server could not be established. Check network settings and try again.";
    });
  
  }

    updatePIN(newPIN,confirmedPIN,oldPin){
      if (newPIN==undefined||newPIN==''||confirmedPIN==undefined||confirmedPIN==''||oldPin==undefined||oldPin==''){
        this.touched=true;
        return;
      }else{
        this.isProcessing=true;
        this.touched=true;
       if(this.touched&&oldPin&&newPIN&&confirmedPIN&&newPIN==confirmedPIN&&this.rPin==oldPin){
         this.isProcessing=true;
         this.processingMsg="Uploading PIN to server..";
         this.lenderService.changePIN(this.storedMemberId,confirmedPIN).subscribe((Response)=>{
             this.isProcessing=false;
             this.processingMsg="";
             console.log(Response);
             this.respData=Response;
             this.isSusccess=this.respData['IsSuccess'];
             if(this.isSusccess==true){
               this.successMsg="New PIN was set up successfully";
                 //this.navCtrl.navigate('Home');
             }else{
               this.errorMsg="Request completed with errors. Try again";
               return;
             }
         },(error)=>{
           this.isProcessing=false;
           this.processingMsg="";
           this.errorMsg="Connection with server could not be established. Check network settings and try again.";
         });
       }
     }
    }
}
