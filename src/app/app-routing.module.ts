import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { EditorComponent } from './views/editor/editor.component';
import { IndexComponent } from './views/index.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [
  {
    path: '', // ⌂
    component: IndexComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: 'update',
    component: UpdateComponent,
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
