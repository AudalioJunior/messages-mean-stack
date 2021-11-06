import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'main', component: MainPagesComponent, children: [
    {path:'messages', component: MessagesComponent}
  ]},

];

export const AppRoutingModule = RouterModule.forRoot(routes);
