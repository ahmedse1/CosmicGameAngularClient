import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartHoldersComponent } from './components/chart-holders/chart-holders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';

const routes: Routes = [
  {
  path:'',
  component:LoginComponent
  },
  {
    path:'registerSuccess',
    component: RegisterSuccessComponent
  }
  ,
  {
    path:'home',
    component: DashboardComponent
  },
  {
    path: 'chartholders',
    component: ChartHoldersComponent
  }
  
  // {
  //   path:'',
  //   component:HeaderFooterComponent,
  //   children:[
  //     {
  //       path:'home',
  //       loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'chartholders',
  //       loadChildren: () => import('./components/chart-holders/chart-holders.module').then(m => m.ChartHoldersModule)
  //     }
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
