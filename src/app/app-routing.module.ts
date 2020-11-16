import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { EditorComponent } from './views/editor/editor.component';
import { IndexComponent } from './views/index.component';
import { LoginComponent } from './views/login/login.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [
  {
    path: '', // ⌂
    component: IndexComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'update',
    component: UpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
