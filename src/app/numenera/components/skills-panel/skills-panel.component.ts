import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.scss'],
})
export class SkillsPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  inabilities = [];
  trained = [];
  specialized = [];

  constructor(private readonly service: NumeneraCharacterService) {}

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe((character) => {
      //TODO
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
