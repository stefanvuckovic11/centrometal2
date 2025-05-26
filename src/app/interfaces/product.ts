export enum ProductCategory {
    HotOffer = 'hotOffer',
    Action = 'action',
    Recommended = 'recommended',
    New = 'new',
    Sale = 'sale'
}

export interface Price {
    old: string;
    new: string;
}

export interface Product {
    name: string;
    id: string;
    category: ProductCategory;
    discount?: string;
    mainImage: string;
    title: string;
    description: string;
    timer?: string;
    price: Price;
}

export interface ProductsByCategory {
    [category: string]: Product[];
}