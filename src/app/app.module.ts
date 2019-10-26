import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { MgoartComponent } from './components/project/mgoart/mgoart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    MgoartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
