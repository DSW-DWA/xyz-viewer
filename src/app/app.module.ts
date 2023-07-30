import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';
import { ClusterComponent } from './cluster/cluster.component';

const appRoutes: Routes =[
  { path: '', component: StartComponent},
  { path: 'cluster', component: ClusterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ClusterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
