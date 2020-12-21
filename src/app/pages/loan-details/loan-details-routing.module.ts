import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanDetailsPage } from './loan-details.page';

const routes: Routes = [
  {
    path: 'loan-details',
    component: LoanDetailsPage,
    children:[
      {
        path: 'edit-loans',
        children:[
          {
            path: '',
            loadChildren: () => import('../edit-loans/edit-loans.module').then(m => m.EditLoansPageModule)
          }
        ]
      },
      {
        path: 'new-loans',
        children:[
          {
            path: '',
            loadChildren: () => import('../new-loans/new-loans.module').then(m => m.NewLoansPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: 'loan-details/edit-loans',
        pathMatch: 'full'
      }/* ,
      {
        path:'',
        redirectTo: 'loan-details/new-loans',
        pathMatch: 'full'
      } */
    ]
  },
  {
    path:'',
    redirectTo: 'loan-details/edit-loans',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanDetailsPageRoutingModule {}
