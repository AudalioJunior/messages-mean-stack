import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { SharedModule } from './shared/shared.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { UserService } from './auth/user.service';

const config: SocketIoConfig = { url: 'http://localhost:4200', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeaderComponent,
    AuthComponent,
    RegisterUserComponent,
    MainPagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SocketIoModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
