import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbIconModule,
  NbDialogModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbMenuModule,
} from '@nebular/theme';
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
import { LogoComponent } from './components/logo/logo.component';
import { UploadZipComponent } from './components/dialogs/upload-zip/upload-zip.component';
import { MenuTemplatesComponent } from './components/menu-templates/menu-templates.component';
import { MenuComponentsComponent } from './components/menu-components/menu-components.component';
import { MenuFilesComponent } from './components/menu-files/menu-files.component';
import { HttpClientModule } from '@angular/common/http';

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
    LogoComponent,
    UploadZipComponent,
    MenuTemplatesComponent,
    MenuComponentsComponent,
    MenuFilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ResizableModule,
    NbSpinnerModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDialogModule.forRoot({}),
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    AceEditorModule,
    NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
