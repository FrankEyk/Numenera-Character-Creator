import { Component, OnInit } from '@angular/core';
import { TypeService } from '../services/type.service';
import { Type } from '../model/type.model';
import { DescriptorService } from '../services/descriptor.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
  selectedName = '';
  selectedDesc = '';

  constructor(private typeService: TypeService,
    private descService: DescriptorService) { }

  ngOnInit(): void {
    this.typeService.subToSelected().subscribe(type => {      
      this.selectedName = type.name;
      this.selectedDesc = type.description;
    });

    this.descService.subToSelected().subscribe(desc => {
      this.selectedName = desc.name;
      this.selectedDesc = desc.description;
    });
  }

}
