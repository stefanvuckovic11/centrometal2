import { ProductCategory } from '../../interfaces/product';

export interface Section {
    key: ProductCategory;
    headerText: string;
    iconClass: string;
    footerButtonText: string;
}
