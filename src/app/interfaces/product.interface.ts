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

export interface Specifications {
    [key: string]: string;
}

export interface ProductInterface {
    id: string;
    category: ProductCategory;
    discount?: string;
    type: string;
    mainImage: string;
    images: string[];
    title: string;
    description: string;
    timer?: string;
    price: Price;
    brand?: string;
    specifications?: Specifications;
    reviews?: any[];
    relatedProducts?: number[];
    tabs?: any;
    similarProducts?: any;
    similarConfig?: any;
}

export interface ProductsByCategory {
    [category: string]: ProductInterface[];
}