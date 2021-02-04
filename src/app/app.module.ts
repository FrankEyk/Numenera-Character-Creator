import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { InfoPanelComponent } from './info-panel/info-panel.component'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { StatsPanelComponent } from './stats-panel/stats-panel.component';
import { SkillsPanelComponent } from './skills-panel/skills-panel.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    InfoPanelComponent,
    StatsPanelComponent,
    SkillsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
