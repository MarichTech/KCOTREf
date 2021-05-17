import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-admin-password-dialog',
  templateUrl: './reset-admin-password-dialog.component.html',
  styleUrls: ['./reset-admin-password-dialog.component.css']
})
export class ResetAdminPasswordDialogComponent implements OnInit {

  currentPassword:any="";
  newPassword:any="";
  confirmNewPassword:any="";
  
  constructor(public dialogRef: MatDialogRef<ResetAdminPasswordDialogComponent>) { }

  ngOnInit(): void {
  }


  onChangePassword(){

  }

  onExit(){
    this.dialogRef.close()
  }

}
