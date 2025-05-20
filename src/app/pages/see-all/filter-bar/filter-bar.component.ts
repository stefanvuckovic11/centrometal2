import { Component, EventEmitter, Output } from '@angular/core';
import { FilterCriteria } from './filter';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  standalone: false
})
export class FilterBarComponent {
  sortType = '';
  minPrice = 0;
  maxPrice = Infinity;

  @Output() filterChanged = new EventEmitter<FilterCriteria>();

  applyFilters() {
    this.filterChanged.emit({
      sortType: this.sortType,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    });
  }
}
