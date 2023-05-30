import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  // { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  // { path: 'office', loadChildren: () => import('./modules/office/office.module').then(m => m.OfficeModule) },
  // { path: 'interview', loadChildren: () => import('./modules/interview/interview.module').then(m => m.InterviewModule) }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class LandingRoutingModule { }
