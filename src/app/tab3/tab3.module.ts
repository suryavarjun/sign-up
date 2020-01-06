import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
const routes: Routes = [
  {
    path: '',
    children:[{
      path:'',
      component:Tab3Page
    },
    {
      path:'sign-up',
      // loadChildren: () => import('../sign-up/sign-up.page').then(m => m.SignUpPageModule)
      loadChildren:'../sign-up/sign-up.module#SignUpPageModule'
    }]
  }
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
