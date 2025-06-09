import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductInterface } from '../../../interfaces/product.interface';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-open-product-info',
    templateUrl: './open-product-info.component.html',
    imports: [
        FormsModule,
        TitleCasePipe,
        NgForOf,
        NgIf
    ],
    styleUrls: ['./open-product-info.component.scss']
})
export class OpenProductInfoComponent implements OnChanges {
  @Input() public product!: ProductInterface;
  public quantity: number = 1;

  public get specEntries(): Array<{ label: string; value: string }> {
    if (!this.product.specifications) {
      return [];
    }
    return Object.entries(this.product.specifications).map(
        ([key, val]) => ({ label: key, value: val })
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }
}
