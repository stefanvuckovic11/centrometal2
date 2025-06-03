import { Component, EventEmitter, Output } from '@angular/core';
import { FilterCriteria } from './filter';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  standalone: false
})
export class FilterBarComponent {
  public sortType: string = '';
  public minPrice: number = 0;
  public maxPrice: number = Infinity;

  @Output() public filterChanged = new EventEmitter<FilterCriteria>();

  public applyFilters(): void {
    this.filterChanged.emit({
      sortType: this.sortType,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    });
  }
}
