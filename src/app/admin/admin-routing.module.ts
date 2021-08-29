import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';


const adminRoutes: Routes = [
  {  path: 'admin',
     component: AdminComponent,
     children: [
       {
         path: '',
         children: [
           { path: '', component: AdminDashboardComponent }
         ]
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
