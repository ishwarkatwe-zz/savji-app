import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {
    path: '',
    children: [
      {
        path: '',
        component: MasterComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          pageId: '#DashboardComponent'
        }
      },
      {
        path: 'view',
        component: ViewComponent,
        data: {
          pageId: '#ViewComponent'
        }
      }
    ],
    component: MasterComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MasterComponent,
    DashboardComponent,
    ViewComponent,
    SidemenuComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        useHash: true
      }
    ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
