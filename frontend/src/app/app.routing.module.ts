import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'main', component: MainPagesComponent, children: [
    {path:'messages', component: MessagesComponent}
  ]},

];

export const AppRoutingModule = RouterModule.forRoot(routes);
