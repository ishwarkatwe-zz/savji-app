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
import { CatagoriesComponent } from './catagories/catagories.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesComponent } from './recipes/recipes.component';

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
        path: 'catagories',
        component: CatagoriesComponent,
        data: {
          pageId: '#CatagoriesComponent'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          pageId: '#ProfileComponent'
        }
      },
      {
        path: 'my-recipes',
        component: RecipesComponent,
        data: {
          pageId: '#RecipesComponent#my'
        }
      },
      {
        path: 'liked-recipes',
        component: RecipesComponent,
        data: {
          pageId: '#RecipesComponent#liked'
        }
      },
      {
        path: 'view',
        component: ViewComponent,
        data: {
          pageId: '#ViewComponent'
        }
      },
      {
        path: 'logout',
        component: LandingComponent,
        data: {
          pageId: '#LandingComponent#logout'
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
    CatagoriesComponent,
    ProfileComponent,
    RecipesComponent,
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
