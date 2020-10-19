import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropPage } from './crop.page';

const routes: Routes = [
  {
    path: '',
    component: CropPage,
    children:[
      {
        path:'paddy',
        children:[
          {
            path: '',
            loadChildren: () => import('../paddy/paddy.module').then( m => m.PaddyPageModule)
          }  
        ]
      },
      {
        path:'potato',
        children:[
          {
            path: '',
            loadChildren: () => import('../potato/potato.module').then( m => m.PotatoPageModule)
          }
        ]
      },
    
      {
        path:'onion',
        children:[
          {
            path: '',
            loadChildren: () => import('../onion/onion.module').then( m => m.OnionPageModule)
          }
        ]
      },
      {
        path:'maize',
        children:[
          {
            path: '',
            loadChildren: () => import('../maize/maize.module').then( m => m.MaizePageModule)
          }
        ]
      },

     
    ]
  },
  {
    path :'',
    redirectTo :'crop/paddy',
    pathMatch:'full'


  },
  {
    path :'',
    redirectTo :'crop/potato',
    pathMatch:'full'


  },
  {
    path :'',
    redirectTo :'crop/onion',
    pathMatch:'full'


  },
  {
    path :'',
    redirectTo :'crop/maize',
    pathMatch:'full'


  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropPageRoutingModule {}
