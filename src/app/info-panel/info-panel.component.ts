import { Component, OnInit } from '@angular/core';
import { DescriptorService } from '../descriptor-service.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {
  selectedDesc = '';

  constructor(private descService: DescriptorService) { }

  ngOnInit(): void {
    this.descService.subToSelected().subscribe(desc => {
      this.selectedDesc = desc;
    });
  }

}
