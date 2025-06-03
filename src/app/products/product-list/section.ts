import { ProductCategory } from '../../interfaces/product.interface';

export interface Section {
    key: ProductCategory;
    headerText: string;
    iconClass: string;
    footerButtonText: string;
}
