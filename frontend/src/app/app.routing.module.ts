import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', redirectTo: '/mensagens', pathMatch: 'full'},
  {path: 'mensagens', component: MessagesComponent},

];

export const AppRoutingModule = RouterModule.forRoot(routes);
