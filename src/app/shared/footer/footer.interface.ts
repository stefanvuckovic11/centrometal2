export interface FooterLink {
    label: string;
    url: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export interface FooterBrand {
    name: string;
    img: string;
}

export interface FooterData {
    brands: FooterBrand[];
    linkColumns: FooterColumn[];
}
