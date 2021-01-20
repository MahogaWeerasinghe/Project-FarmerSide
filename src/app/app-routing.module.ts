import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
 {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'farmer-profile',
    loadChildren: () => import('./pages/farmer-profile/farmer-profile.module').then( m => m.FarmerProfilePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'crop',
    loadChildren: () => import('./pages/crop/crop.module').then( m => m.CropPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'loans',
    loadChildren: () => import('./pages/loans/loans.module').then( m => m.LoansPageModule)
  },
  {
    path: 'change-pw',
    loadChildren: () => import('./pages/change-pw/change-pw.module').then( m => m.ChangePwPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./pages/application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'loandetails',
    loadChildren: () => import('./pages/loandetails/loandetails.module').then( m => m.LoandetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'updatedetails',
    loadChildren: () => import('./pages/updatedetails/updatedetails.module').then( m => m.UpdatedetailsPageModule)
  },
  {
    path: 'gmap',
    loadChildren: () => import('./pages/gmap/gmap.module').then( m => m.GmapPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'loanviews',
    loadChildren: () => import('./pages/loanviews/loanviews.module').then( m => m.LoanviewsPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'approveddetails',
    loadChildren: () => import('./pages/approveddetails/approveddetails.module').then( m => m.ApproveddetailsPageModule)
  },
  {
    path: 'rejecteddetails',
    loadChildren: () => import('./pages/rejecteddetails/rejecteddetails.module').then( m => m.RejecteddetailsPageModule)
  },
  {
    path: 'paymentdetails',
    loadChildren: () => import('./pages/paymentdetails/paymentdetails.module').then( m => m.PaymentdetailsPageModule)
  },
  {
    path: 'agriofficer',
    loadChildren: () => import('./pages/agriofficer/agriofficer.module').then( m => m.AgriofficerPageModule)
  },
  {
    path: 'agrirequests',
    loadChildren: () => import('./pages/agrirequests/agrirequests.module').then( m => m.AgrirequestsPageModule)
  },
  {
    path: 'agrirequestsenter',
    loadChildren: () => import('./pages/agrirequestsenter/agrirequestsenter.module').then( m => m.AgrirequestsenterPageModule)
  },
  {
    path: 'officers',
    loadChildren: () => import('./pages/officers/officers.module').then( m => m.OfficersPageModule)
  },
  {
    path: 'aiofficer',
    loadChildren: () => import('./pages/aiofficer/aiofficer.module').then( m => m.AiofficerPageModule)
  },
  {
    path: 'doofficer',
    loadChildren: () => import('./pages/doofficer/doofficer.module').then( m => m.DoofficerPageModule)
  },
  {
    path: 'agrirequest',
    loadChildren: () => import('./pages/agrirequest/agrirequest.module').then( m => m.AgrirequestPageModule)
  },
  {
    path: 'airequest',
    loadChildren: () => import('./pages/airequest/airequest.module').then( m => m.AirequestPageModule)
  },
  {
    path: 'airequestenter',
    loadChildren: () => import('./pages/airequestenter/airequestenter.module').then( m => m.AirequestenterPageModule)
  },
  {
    path: 'doofficerequest',
    loadChildren: () => import('./pages/doofficerequest/doofficerequest.module').then( m => m.DoofficerequestPageModule)
  },
  {
    path: 'doofficerequestenter',
    loadChildren: () => import('./pages/doofficerequestenter/doofficerequestenter.module').then( m => m.DoofficerequestenterPageModule)
  },
  {
    path: 'viewstatus',
    loadChildren: () => import('./pages/viewstatus/viewstatus.module').then( m => m.ViewstatusPageModule)
  },
  {
    path: 'viewstatusdetails',
    loadChildren: () => import('./pages/viewstatusdetails/viewstatusdetails.module').then( m => m.ViewstatusdetailsPageModule)
  },
  {
    path: 'viewagrireport',
    loadChildren: () => import('./pages/viewagrireport/viewagrireport.module').then( m => m.ViewagrireportPageModule)
  },
  {
    path: 'viewaireport',
    loadChildren: () => import('./pages/viewaireport/viewaireport.module').then( m => m.ViewaireportPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'estimate',
    loadChildren: () => import('./pages/estimate/estimate.module').then( m => m.EstimatePageModule)
  },
  {
    path: 'agrihistory',
    loadChildren: () => import('./pages/agrihistory/agrihistory.module').then( m => m.AgrihistoryPageModule)
  },
  {
    path: 'aihistory',
    loadChildren: () => import('./pages/aihistory/aihistory.module').then( m => m.AihistoryPageModule)
  },
  {
    path: 'dohistory',
    loadChildren: () => import('./pages/dohistory/dohistory.module').then( m => m.DohistoryPageModule)
  },
  {
    path: 'agrihistorydetails',
    loadChildren: () => import('./pages/agrihistorydetails/agrihistorydetails.module').then( m => m.AgrihistorydetailsPageModule)
  },
  {
    path: 'aihistorydetails',
    loadChildren: () => import('./pages/aihistorydetails/aihistorydetails.module').then( m => m.AihistorydetailsPageModule)
  },
  {
    path: 'dohistorydetails',
    loadChildren: () => import('./pages/dohistorydetails/dohistorydetails.module').then( m => m.DohistorydetailsPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'obtain-loans-view',
    loadChildren: () => import('./pages/obtain-loans-view/obtain-loans-view.module').then( m => m.ObtainLoansViewPageModule)
  },
  {
    path: 'demobanks',
    loadChildren: () => import('./pages/demobanks/demobanks.module').then( m => m.DemobanksPageModule)
  },
  {
    path: 'banklogin',
    loadChildren: () => import('./pages/banklogin/banklogin.module').then( m => m.BankloginPageModule)
  },
  {
    path: 'bankintro',
    loadChildren: () => import('./pages/bankintro/bankintro.module').then( m => m.BankintroPageModule)
  },
  {
    path: 'bankloandetails',
    loadChildren: () => import('./pages/bankloandetails/bankloandetails.module').then( m => m.BankloandetailsPageModule)
  },
  {
    path: 'loan-details',
    loadChildren: () => import('./pages/loan-details/loan-details.module').then( m => m.LoanDetailsPageModule)
  },
  {
    path: 'loan-requests',
    loadChildren: () => import('./pages/loan-requests/loan-requests.module').then( m => m.LoanRequestsPageModule)
  },
  {
    path: 'new-requests',
    loadChildren: () => import('./pages/new-requests/new-requests.module').then( m => m.NewRequestsPageModule)
  },
  {
    path: 'approved-requests',
    loadChildren: () => import('./pages/approved-requests/approved-requests.module').then( m => m.ApprovedRequestsPageModule)
  },
  {
    path: 'pending-requests',
    loadChildren: () => import('./pages/pending-requests/pending-requests.module').then( m => m.PendingRequestsPageModule)
  },
  {
    path: 'obtain-loans',
    loadChildren: () => import('./pages/obtain-loans/obtain-loans.module').then( m => m.ObtainLoansPageModule)
  },
  {
    path: 'new-request-loan',
    loadChildren: () => import('./pages/new-request-loan/new-request-loan.module').then( m => m.NewRequestLoanPageModule)
  },
  {
    path: 'new-request-view',
    loadChildren: () => import('./pages/new-request-view/new-request-view.module').then( m => m.NewRequestViewPageModule)
  },
  {
    path: 'personal-details-view',
    loadChildren: () => import('./pages/personal-details-view/personal-details-view.module').then( m => m.PersonalDetailsViewPageModule)
  },
  {
    path: 'application-form-view',
    loadChildren: () => import('./pages/application-form-view/application-form-view.module').then( m => m.ApplicationFormViewPageModule)
  },
  {
    path: 'approveloan',
    loadChildren: () => import('./pages/approveloan/approveloan.module').then( m => m.ApproveloanPageModule)
  },
  {
    path: 'pending-reason',
    loadChildren: () => import('./pages/pending-reason/pending-reason.module').then( m => m.PendingReasonPageModule)
  },
  {
    path: 'approved-request-loan',
    loadChildren: () => import('./pages/approved-request-loan/approved-request-loan.module').then( m => m.ApprovedRequestLoanPageModule)
  },
  {
    path: 'approved-request-view',
    loadChildren: () => import('./pages/approved-request-view/approved-request-view.module').then( m => m.ApprovedRequestViewPageModule)
  },
  {
    path: 'toobtain',
    loadChildren: () => import('./pages/toobtain/toobtain.module').then( m => m.ToobtainPageModule)
  },
  {
    path: 'pending-request-loan',
    loadChildren: () => import('./pages/pending-request-loan/pending-request-loan.module').then( m => m.PendingRequestLoanPageModule)
  },
  {
    path: 'pending-request-view',
    loadChildren: () => import('./pages/pending-request-view/pending-request-view.module').then( m => m.PendingRequestViewPageModule)
  },
  {
    path: 'obtained-loans-loan',
    loadChildren: () => import('./pages/obtained-loans-loan/obtained-loans-loan.module').then( m => m.ObtainedLoansLoanPageModule)
  },
  {
    path: 'obtained-loan-view',
    loadChildren: () => import('./pages/obtained-loan-view/obtained-loan-view.module').then( m => m.ObtainedLoanViewPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./pages/payment-confirm/payment-confirm.module').then( m => m.PaymentConfirmPageModule)
  },
  {
    path: 'payment-details',
    loadChildren: () => import('./pages/payment-details/payment-details.module').then( m => m.PaymentDetailsPageModule)
  },
  /*{
    path: 'edit-loans',
    loadChildren: () => import('./pages/edit-loans/edit-loans.module').then( m => m.EditLoansPageModule)
  },*/
  {
    path: 'new-loans',
    loadChildren: () => import('./pages/new-loans/new-loans.module').then( m => m.NewLoansPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./pages/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  /*{
    path: 'myloans',
    loadChildren: () => import('./pages/myloans/myloans.module').then( m => m.MyloansPageModule)
  },*/
 /* {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./page/application/application.module').then( m => m.ApplicationPageModule)
  },*/
 /* {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then( m => m.LoansPageModule)
  },

  {
    path: 'paddyloan',
    loadChildren: () => import('./paddyloan/paddyloan.module').then( m => m.PaddyloanPageModule)
  },
  {
    path: 'potatoloan',
    loadChildren: () => import('./potatoloan/potatoloan.module').then( m => m.PotatoloanPageModule)
  },
  {
    path: 'onionloan',
    loadChildren: () => import('./onionloan/onionloan.module').then( m => m.OnionloanPageModule)
  },
  {
    path: 'maizeloan',
    loadChildren: () => import('./maizeloan/maizeloan.module').then( m => m.MaizeloanPageModule)
  },
 
  */
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
