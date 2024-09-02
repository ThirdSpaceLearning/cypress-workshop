import { dummyJson } from '@services';
import { ProductsType, ProductType } from '@types';

export const getProducts = async (): Promise<ProductType[]> => {
    return dummyJson
        .get<ProductsType>('/products', {
            params: {
                limit: 25,
                select: 'title,thumbnail',
            },
        })
        .then((res) => res.data.products);
};
