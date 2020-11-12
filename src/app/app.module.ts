import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { IndexComponent } from './views/index.component';
import { EditorComponent } from './views/editor/editor.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { UpdateComponent } from './views/update/update.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';
import { EditorHeaderComponent } from './components/editor-header/editor-header.component';
import { AceCodeEditorComponent } from './components/ace-code-editor/ace-code-editor.component';
import { WebsitePreviewComponent } from './components/website-preview/website-preview.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { ComponentsListComponent } from './components/components-list/components-list.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { ResizableModule } from 'angular-resizable-element';
import { SafePipe } from './pipes/safe-pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditorComponent,
    AnalyticsComponent,
    UpdateComponent,
    SimpleHeaderComponent,
    EditorHeaderComponent,
    AceCodeEditorComponent,
    WebsitePreviewComponent,
    TemplateListComponent,
    ComponentsListComponent,
    FilesListComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ResizableModule,
    NbSpinnerModule,
    NbEvaIconsModule,
    NbIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
