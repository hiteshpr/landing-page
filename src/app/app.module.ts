import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';


import { BoxSmallRoutingModule } from './+boxs/box-small/box-small-routing.module';
import { BoxSmallComponent } from './+boxs/box-small/box-small.component';

import { BoxModule, BoxSmallModule as MkBoxSmallModule  } from 'angular-admin-lte';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    BoxSmallRoutingModule,
    BoxModule, MkBoxSmallModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BoxSmallComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
