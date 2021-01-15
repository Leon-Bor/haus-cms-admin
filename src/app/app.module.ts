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
  NbProgressBarModule,
  NbTooltipModule,
  NbToggleModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { IndexComponent } from './views/index.component';
import { EditorComponent } from './views/editor/editor.component';
import { AnalyticsComponent } from './views/analytics/analytics.component';
import { UpdateComponent } from './views/update/update.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';
import { EditorHeaderComponent } from './components/editor-header/editor-header.component';
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
import { FileComponent } from './components/file/file.component';
import { DeleteDialogComponent } from './components/dialogs/delete-dialog/delete-dialog.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AddFileComponent } from './components/dialogs/add-file/add-file.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { SocketService } from './services/socket.service';
import { SettingsService } from './services/settings.service';
import { SettingsComponent } from './views/settings/settings.component';

const config: SocketIoConfig = { url: environment.backendUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditorComponent,
    AnalyticsComponent,
    UpdateComponent,
    SimpleHeaderComponent,
    EditorHeaderComponent,
    WebsitePreviewComponent,
    SafePipe,
    LogoComponent,
    UploadZipComponent,
    MenuTemplatesComponent,
    MenuComponentsComponent,
    MenuFilesComponent,
    LoginComponent,
    FileComponent,
    DeleteDialogComponent,
    AddFileComponent,
    SettingsComponent,
  ],
  imports: [
    SocketIoModule.forRoot(config),
    NbProgressBarModule,
    FileUploadModule,
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
    NbTooltipModule,
    ReactiveFormsModule,
    NbToggleModule,
  ],
  providers: [
    FilesService,
    ComponentsService,
    AuthGuardService,
    TemplatesService,
    SocketService,
    SettingsService,
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
