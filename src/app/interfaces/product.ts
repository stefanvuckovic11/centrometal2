export interface Price {
    old: string;
    new: string;
}

export interface Product {
    id: string;
    category: 'hotOffer' | 'action' | 'recommended' | 'new' | 'sale';
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
