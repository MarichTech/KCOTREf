import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  
  AdminLogin(UserName,Password){
    return this.http.get('http://3.13.237.46/hostedapi/Register/getUser?UserName='+UserName+'&&Password='+Password+'')
  }
  

  ApproveMember(MemberId,Email){
    return this.http.get('http://3.13.237.46/Demo/ApproveMember?MemberId='+MemberId+'&&Email='+Email+'')
  }

  GetNonApprovedMembers(){
    return this.http.get('http://3.13.237.46/Demo/NonApprovedMembers');
    
  }

  GetNonApprovedMemberDetails(MemberId){
    return this.http.get('http://3.13.237.46/Demo/NonApprovedMembers');
    
  }

  GetMemberDetailsById(MemberId:number):any{
    return this.http.get('http://3.13.237.46/Demo/GetMemberDetailsById?MemberId='+MemberId+'');
  }


}
