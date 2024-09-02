export type ProductType = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
};

export type ProductsType = {
    products: ProductType[];
};
