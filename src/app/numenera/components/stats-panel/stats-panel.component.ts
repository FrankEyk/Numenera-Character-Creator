import { Component, Input, OnDestroy, OnInit, Type } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClassType } from '../../model/Type.model';
import { PLUS_TWO_INT } from '../../model/Upgrade.model';
import { NumeneraCharacterService } from '../../services/NumeneraCharacter.service';

@Component({
  selector: 'app-stats-panel',
  templateUrl: './stats-panel.component.html',
  styleUrls: ['./stats-panel.component.css']
})
export class StatsPanelComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];

  headerMight = 'Might';
  headerSpeed = 'Speed';
  headerInt = 'Intellect';

  pointsToSpend = 6;

  might = 0;
  speed = 0;
  intellect = 0;

  mightEdge = 0;
  speedEdge = 0;
  intellectEdge = 0;

  constructor(private readonly service: NumeneraCharacterService) { }

  ngOnInit(): void {
    this.subs.push(this.service.type$.subscribe(type => {
      this.setStats(0, 0, 0, 0, 0, 0);
      this.pointsToSpend = 6;

      if (type.name !== '') {
        if (type.classType === ClassType.GLAIVE) {
          this.setStats(11, 1, 10, 1, 7, 0);
        }
      }

    }));

    this.subs.push(this.service.descriptor$.subscribe(desc => {
      if (desc.name !== '') {
        desc.benefits.forEach(benefit => {
          if (benefit.upgrade === PLUS_TWO_INT) {
            this.intellect = this.intellect + 2;
          }
        });
      }
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  setStats(m: number, me: number, s: number, se: number, i: number, ie: number): void {
    this.might = m;
    this.mightEdge = me;
    this.speed = s;
    this.speedEdge = se;
    this.intellect = i;
    this.intellectEdge = ie;
  }

  poolMightAdd(): void {
    this.might++;
  }

  poolMightRemove(): void {
    this.might--;
  }

  poolSpeedAdd(): void {
    this.speed++;
  }

  poolSpeedRemove(): void {
    this.speed--;
  }

  poolIntAdd(): void {
    this.intellect++;
  }

  poolIntRemove(): void {
    this.intellect--;
  }

  /** */

  edgeMightAdd(): void {
    this.mightEdge++;
  }

  edgeMightRemove(): void {
    this.mightEdge--;
  }

  edgeSpeedAdd(): void {
    this.speedEdge++;
  }

  edgeSpeedRemove(): void {
    this.speedEdge--;
  }

  edgeIntAdd(): void {
    this.intellectEdge++;
  }

  edgeIntRemove(): void {
    this.intellectEdge--;
  }

}
