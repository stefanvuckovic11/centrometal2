import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-brand-search',
  templateUrl: './brand-search.component.html',
  styleUrls: ['./brand-search.component.scss'],
  standalone: false
})
export class BrandSearchComponent implements OnInit {
  query = '';
  @Output() search = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}
}
