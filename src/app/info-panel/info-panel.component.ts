import { Component, OnInit } from '@angular/core';
import { TypeService } from '../services/type.service';
import { Type } from '../model/type.model';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
  selectedDesc = '';
  selectedDescDesc = '';

  constructor(private descService: TypeService) { }

  ngOnInit(): void {
    this.descService.subToSelected().subscribe(desc => {
      
      this.selectedDesc = desc.name;
      this.selectedDescDesc = desc.description;
    });
  }

}
