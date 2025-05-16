import { Component, OnInit } from '@angular/core';
import { AccordionItem } from './accordion-item';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone:false
})
export class AccordionComponent implements OnInit {
  items: AccordionItem[] = [];

  constructor(private accordionService: AccordionService) {}

  ngOnInit(): void {
    this.accordionService.getItems()
        .subscribe(data => this.items = data);
  }

  toggle(i: number): void {
    if (!this.items[i].children) { return; }
    this.items[i].expanded = !this.items[i].expanded;
  }
}
