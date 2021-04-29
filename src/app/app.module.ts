import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
import { NgxSpinnerModule } from "ngx-spinner";
//import { JasperoAlertsModule } from '@jaspero/ng-alerts';

import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { ActivateComponent } from './activate/activate.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoansComponent } from './loans/loans.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LoansHistoryComponent } from './loans-history/loans-history.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LogoutComponent } from './logout/logout.component';
import { LoanResultComponent } from './loan-result/loan-result.component';
import { PayComponent } from './pay/pay.component';
import { AccountComponent } from './account/account.component';
import { ChangePINComponent } from './change-pin/change-pin.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { RegisterComponent } from './register/register.component';
import { SecurityDetailsComponent } from './security-details/security-details.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { LoansBackofficeComponent } from './loans-backoffice/loans-backoffice.component';
import { NominateGuarantorsComponent } from './nominate-guarantors/nominate-guarantors.component';
import { LoanNominationsComponent } from './loan-nominations/loan-nominations.component';
import { PreNominationsComponent } from './pre-nominations/pre-nominations.component';
import { ApproveNominationsComponent } from './approve-nominations/approve-nominations.component';
import {ColleteralComponent} from './colleteral/colleteral.component';
import { MemberPendingAppraisalsComponent } from './MemberPendingAppraisals/MemberPendingAppraisals.component';

//angular material components
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { GuaratorsComponent } from './guarators/guarators.component';
import { MatDialogModule} from '@angular/material/dialog'
import { LoanApplicationService } from './shared/loan-application.service';
import { from } from 'rxjs';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NonApprovedMembersComponent } from './admin/non-approved-members/non-approved-members.component';
import { NonApprovedMemberDetailsComponent } from './admin/non-approved-member-details/non-approved-member-details.component';
import { DataTablesModule } from 'angular-datatables';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExceptConditionComponent } from './except-condition/except-condition.component';
import { SitemappingComponent } from './sitemapping/sitemapping.component';
import { LoanAppraisalComponent } from './loan-appraisal/loan-appraisal.component';
import { PendingAppraisalListComponent } from './pending-appraisal-list/pending-appraisal-list.component';
import { ViewDetailedApplicationComponent } from './view-detailed-application/view-detailed-application.component';
import { ViewLoanApplicationComponent } from './view-loan-application/view-loan-application.component';
import { ViewDetailedLoanApplicationComponent } from './view-detailed-loan-application/view-detailed-loan-application.component';
import { ApplicationsPendingDisbursementComponent } from './applications-pending-disbursement/applications-pending-disbursement.component';
import { ApplicationsPendingApprovalComponent } from './applications-pending-approval/applications-pending-approval.component';
import { UpdateBusinessProfileComponent } from './update-business-profile/update-business-profile.component';
import { UpdatePersonalProfileComponent } from './update-personal-profile/update-personal-profile.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Account',
    component:AccountComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'help',
    component:ExceptConditionComponent
  },
  {
    path:'SecurityDetails',
    component:SecurityDetailsComponent
  },
    {
    path:'Activate',
    component:ActivateComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Loans',
    component:LoanApplicationComponent
  },
  {
    path:'Loans-BackOffice',
    component:LoansBackofficeComponent
  },
  {
    path:'LoanResult',
    component:LoanResultComponent
  },
  {
    path:'LoansHistory',
    component:LoansHistoryComponent
  },
  {
    path:'Loan-Appraisal',
    component:LoanAppraisalComponent
  },
  {
    path:'Pay',
    component:PayComponent
  } ,
  {
    path:'Transaction',
    component:TransactionComponent
  },
  {
    path:'ChangePin',
    component:ChangePINComponent
  },
  {
    path:'ApproveNominations',
    component:ApproveNominationsComponent
  },
  {
    path:'NominateGuarantors',
    component:NominateGuarantorsComponent
  },
  {
    path:'LoanNominations',
    component:PreNominationsComponent
  },
  {
    path:'Logout',
    component:LogoutComponent
  },
  {
    path:'A-SignIn',
    component:AdminLoginComponent
  },
  {
    path:'A-Dashboard',
    component:AdminDashboardComponent

  },
  {
    path:'Non-ApprovedMembers',
    component:NonApprovedMembersComponent

  },
  {
    path:'N-MemberDetails',
    component:NonApprovedMemberDetailsComponent
    
  },
  {
    path:'Pending-Appraisal-List',
    component:PendingAppraisalListComponent
    
  },
  {
    path:'Pending-Approval-List',
    component:ApplicationsPendingApprovalComponent
    
  },
  {
    path:'Pending-Disbursement-List',
    component:ApplicationsPendingDisbursementComponent
    
  },
  {
    path:'UserLoanApplication',
    component:ViewLoanApplicationComponent
    
  },
  {
    path:'EditPersonalProfile',
    component:UpdatePersonalProfileComponent
    
  },
  {
    path:'EditBusinessProfile',
    component:UpdateBusinessProfileComponent
    
  },
  {
    path: 'MemberPendingAppraisals',
    component: MemberPendingAppraisalsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivateComponent,
    HomeComponent,
    HeaderComponent,
    LoansComponent,
    LoansHistoryComponent,
    TransactionComponent,
    LogoutComponent,
    LoanResultComponent,
    PayComponent,
    AccountComponent,
    ChangePINComponent,
    RegisterComponent,
    SecurityDetailsComponent,
    ForgotPinComponent,
    LoansBackofficeComponent,
    NominateGuarantorsComponent,
    LoanNominationsComponent,
    PreNominationsComponent,
    ApproveNominationsComponent,
    ColleteralComponent,
    LoanApplicationComponent,
    GuaratorsComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    NonApprovedMembersComponent,
    NonApprovedMemberDetailsComponent,
    ExceptConditionComponent,
    SitemappingComponent,
    LoanAppraisalComponent,
    PendingAppraisalListComponent,
    ViewDetailedApplicationComponent,
    ViewLoanApplicationComponent,
    ViewDetailedLoanApplicationComponent,
    MemberPendingAppraisalsComponent,
    ApplicationsPendingDisbursementComponent,
    ApplicationsPendingApprovalComponent,
    UpdateBusinessProfileComponent,
    UpdatePersonalProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    NgxSpinnerModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ModalModule.forRoot(),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    DataTablesModule,
    MatExpansionModule
  
  ],
  entryComponents:[ColleteralComponent,SitemappingComponent],
  providers: [UserService,NgxNavigationWithDataComponent,CurrencyPipe,LoanApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
