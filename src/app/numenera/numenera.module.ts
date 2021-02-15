import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeneraComponent } from './numenera.component';

import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { StatsPanelComponent } from './components/stats-panel/stats-panel.component';
import { SkillsPanelComponent } from './components/skills-panel/skills-panel.component';
import { StatComponent } from './components/stats-panel/stat/stat.component';
import { SpecializedComponent } from './components/skills-panel/specialized/specialized.component';
import { TrainedComponent } from './components/skills-panel/trained/trained.component';
import { InabilityComponent } from './components/skills-panel/inability/inability.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NumeneraComponent,
    MainPanelComponent,
    InfoPanelComponent,
    StatsPanelComponent,
    SkillsPanelComponent,
    StatComponent,
    SpecializedComponent,
    TrainedComponent,
    InabilityComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
  ],
  exports: [
    NumeneraComponent
  ]
})
export class NumeneraModule { }
