import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './app-routing.module';
import { ClusterComponent } from './cluster/cluster.component';
import { ExportComponent } from './export/export.component';

const appRoutes: Routes =[
  { path: '', component: StartComponent},
  { path: 'cluster', component: ClusterComponent},
  { path: 'export', component: ExportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ClusterComponent,
    ExportComponent
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
