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
