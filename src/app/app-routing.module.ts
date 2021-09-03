import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
  path:'',
  component:LoginComponent
  }
  ,
  {
    path:'home',
    component:HeaderFooterComponent,
    loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    component:HeaderFooterComponent,
    path: 'chartholders', loadChildren: () => import('./components/chart-holders/chart-holders.module').then(m => m.ChartHoldersModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
