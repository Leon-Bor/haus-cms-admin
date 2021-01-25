import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminComponent } from './views/admin/admin.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { EditorComponent } from './views/editor/editor.component';
import { IndexComponent } from './views/index.component';
import { LoginComponent } from './views/login/login.component';
import { SettingsComponent } from './views/settings/settings.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [
  {
    path: '', // ⌂
    redirectTo: 'haus-admin/login',
    pathMatch: 'full',
  },
  {
    path: 'haus-admin', // ⌂
    component: AdminComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'haus-admin/editor',
    component: EditorComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'haus-admin/update',
    component: UpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'haus-admin/analytics',
    component: AnalyticsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'haus-admin/login',
    component: LoginComponent,
  },
  {
    path: 'haus-admin/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'haus-admin/:else', children: [{ path: '**', component: LoginComponent }] },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
