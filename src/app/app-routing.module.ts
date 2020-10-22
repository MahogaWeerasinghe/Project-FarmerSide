import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'home',
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