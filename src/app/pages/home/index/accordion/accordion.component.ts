import { Component, OnInit } from '@angular/core';
import { AccordionItemInterface } from './accordion-item.interface';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: false
})
export class AccordionComponent implements OnInit {
  items: AccordionItemInterface[] = [];

  constructor(private accordionService: AccordionService) {}

  ngOnInit(): void {
    this.accordionService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  toggle(item: AccordionItemInterface): void {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }
}
