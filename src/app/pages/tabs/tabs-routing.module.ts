import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
    {
      path: 'obtained-loans',
      children :[
        {
          path : '',
      loadChildren: () => import('../../pages/obtained-loans/obtained-loans.module').then( m => m.ObtainedLoansPageModule)
    
        }
  ]
  },
    { 
      path: 'approved-loans',
      children : [
        {
          path: '',
      loadChildren: () => import('../../pages/approved-loans/approved-loans.module').then( m => m.ApprovedLoansPageModule)
     }]
    
    },
    {
      path: 'pending-loans',
      children:[
        {
          path:'',
      loadChildren: () => import('../../pages/pending-loans/pending-loans.module').then( m => m.PendingLoansPageModule)
     }] 
  },

    {
      path: 'rejected-loans',
      children:[
        {
          path:'',
      loadChildren: () => import('../../pages/rejected-loans/rejected-loans.module').then( m => m.RejectedLoansPageModule)
        }]
    },
   
    
  

  
  {
    path :'',
    redirectTo :'/tabs/obtained-loans',
    pathMatch:'full'


  }
]
},
{
  path :'',
  redirectTo :'/tabs/obtained-loans',
  pathMatch:'full'


}];
/*
  {
    path :'',
    redirectTo :'tabs/approved-loans',
    pathMatch:'full'

  },
  {
    path :'',
    redirectTo :'tabs/pending-loans',
    pathMatch:'full'

  },
  {
    path :'',
    redirectTo :'tabs/rejected-loans',
    pathMatch:'full'

  }*/


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
