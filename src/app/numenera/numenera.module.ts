import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumeneraComponent } from './numenera.component';

import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { StatsPanelComponent } from './components/stats-panel/stats-panel.component';
import { SkillsPanelComponent } from './components/skills-panel/skills-panel.component';
import { AbilitiesPanelComponent } from './components/abilities-panel/abilities-panel.component';
import { FixedAbilitiesComponent } from './components/abilities-panel/fixed-abilities/fixed-abilities.component';
import { ChoiceAbilitiesComponent } from './components/abilities-panel/choice-abilities/choice-abilities.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NumeneraComponent,
    MainPanelComponent,
    InfoPanelComponent,
    StatsPanelComponent,
    SkillsPanelComponent,
    AbilitiesPanelComponent,
    FixedAbilitiesComponent,
    ChoiceAbilitiesComponent,
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
    MatChipsModule,
    MatExpansionModule,
    FormsModule,
    SharedModule,
  ],
  exports: [NumeneraComponent],
})
export class NumeneraModule {}
