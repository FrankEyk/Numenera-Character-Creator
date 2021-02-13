import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component'; 
import { StatsPanelComponent } from './components/stats-panel/stats-panel.component';
import { SkillsPanelComponent } from './components/skills-panel/skills-panel.component';
import { StatComponent } from './components/stats-panel/stat/stat.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    InfoPanelComponent,
    StatsPanelComponent,
    SkillsPanelComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
