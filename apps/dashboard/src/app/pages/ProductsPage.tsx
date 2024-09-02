import { useQuery } from '@tanstack/react-query';

import { Box, Grid2 as Grid, Typography } from '@mui/material';

import DashboardContent from '../layouts/DashboardContent';

import { ProductItem } from '@features';
import { QueryKeys, productsApi, QUERY_STATUS } from '@services';
import { ProductType } from '@types';

const ProductsPage = () => {
    const { status, data: products } = useQuery<ProductType[]>({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: () => productsApi.getProducts(),
        retry: 1,
    });

    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                Products
            </Typography>
            {status === QUERY_STATUS.success && (
                <Box>
                    <Grid container spacing={3}>
                        {products.map((product) => (
                            <Grid
                                key={product.id}
                                size={{ xs: 12, sm: 6, md: 3 }}
                            >
                                <ProductItem product={product} />
                            </Grid>
                        ))}
                    </Grid>

                    {/*<Pagination*/}
                    {/*    count={10}*/}
                    {/*    color="primary"*/}
                    {/*    sx={{ mt: 8, mx: 'auto' }}*/}
                    {/*/>*/}
                </Box>
            )}
        </DashboardContent>
    );
};

export default ProductsPage;
