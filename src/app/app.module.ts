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
  NbToastrModule,
  NbGlobalPositionStrategy,
  NbGlobalPhysicalPosition,
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
import { ResizableModule } from 'angular-resizable-element';
import { SafePipe } from './pipes/safe-pipe';
import { LogoComponent } from './components/logo/logo.component';
import { UploadZipComponent } from './components/dialogs/upload-zip/upload-zip.component';
import { MenuTemplatesComponent } from './components/menu-templates/menu-templates.component';
import { MenuComponentsComponent } from './components/menu-components/menu-components.component';
import { MenuFilesComponent } from './components/menu-files/menu-files.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilesService } from './services/files.service';
import { ComponentsService } from './services/components.service';
import { TemplatesService } from './services/templates.service';
import { CmsInterceptor } from './interceptors/cms.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

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
    SafePipe,
    LogoComponent,
    UploadZipComponent,
    MenuTemplatesComponent,
    MenuComponentsComponent,
    MenuFilesComponent,
    LoginComponent,
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
    NbToastrModule.forRoot({ duration: 10000, position: NbGlobalPhysicalPosition.BOTTOM_RIGHT, destroyByClick: true }),
  ],
  providers: [
    FilesService,
    ComponentsService,
    AuthGuardService,
    TemplatesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CmsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
