import { Component, OnInit } from '@angular/core';
import { DescriptorService } from '../descriptor-service.service';
import { Descriptor } from '../model/description.model';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
  selectedDesc = '';
  selectedDescDesc = '';

  constructor(private descService: DescriptorService) { }

  ngOnInit(): void {
    this.descService.subToSelected().subscribe(desc => {
      
      this.selectedDesc = desc.name;
      this.selectedDescDesc = desc.description;
    });
  }

}
