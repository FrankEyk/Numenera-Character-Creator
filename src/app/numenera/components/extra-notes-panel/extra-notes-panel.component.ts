import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-extra-notes-panel',
  templateUrl: './extra-notes-panel.component.html',
  styleUrls: ['./extra-notes-panel.component.scss']
})
export class ExtraNotesPanelComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  notes: Array<String> = [];

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subscription = this.service.character$.subscribe(
      (character) => {
        this.notes = [...character.extraNotes];
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
