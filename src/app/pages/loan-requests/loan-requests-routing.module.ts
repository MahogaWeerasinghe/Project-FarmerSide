import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanRequestsPage } from './loan-requests.page';

const routes: Routes = [
  {
    path: 'loan-requests',
    component: LoanRequestsPage,
    children:[
      {
        path: 'new-requests',
        children:[
          {
            path: '',
            loadChildren: () => import('../new-requests/new-requests.module').then(m => m.NewRequestsPageModule)
          }
        ]
      },
      {
        path: 'approved-requests',
        children:[
          {
            path: '',
            loadChildren: () => import('../approved-requests/approved-requests.module').then(m => m.ApprovedRequestsPageModule)
          }
        ]
      },
      {
        path: 'pending-requests',
        children:[
          {
            path: '',
            loadChildren: () => import('../pending-requests/pending-requests.module').then(m => m.PendingRequestsPageModule)
          }
        ]
      },
      {
        path: 'obtain-loans',
        children:[
          {
            path: '',
            loadChildren: () => import('../obtain-loans/obtain-loans.module').then(m => m.ObtainLoansPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: 'loan-requests/new-requests',
        pathMatch: 'full'
      }/* ,
      {
        path:'',
        redirectTo: 'loan-requests/approved-requests',
        pathMatch: 'full'
      },
      {
        path:'',
        redirectTo: 'loan-requests/pending-requests',
        pathMatch: 'full'
      } */
    ]
  },
  {
    path:'',
    redirectTo: 'loan-requests/new-requests',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanRequestsPageRoutingModule {}
