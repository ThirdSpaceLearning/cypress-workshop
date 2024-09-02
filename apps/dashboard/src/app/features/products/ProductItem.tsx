import { FC } from 'react';

import { Box, Card, Stack } from '@mui/material';

import { ProductType } from '@types';

type Props = {
    product: ProductType;
};

const ProductItem: FC<Props> = ({ product }) => {
    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                {/*{product.status && renderStatus}*/}

                <Box
                    component="img"
                    alt={product.title}
                    src={product.thumbnail}
                    sx={{
                        top: 0,
                        width: 1,
                        height: 1,
                        objectFit: 'cover',
                        position: 'absolute',
                    }}
                />
            </Box>

            {/*<Stack spacing={2} sx={{ p: 3 }}>*/}
            {/*    <Link*/}
            {/*        color="inherit"*/}
            {/*        underline="hover"*/}
            {/*        variant="subtitle2"*/}
            {/*        noWrap*/}
            {/*    >*/}
            {/*        {product.name}*/}
            {/*    </Link>*/}

            {/*    <Box*/}
            {/*        display="flex"*/}
            {/*        alignItems="center"*/}
            {/*        justifyContent="space-between"*/}
            {/*    >*/}
            {/*        <ColorPreview colors={product.colors} />*/}
            {/*        {renderPrice}*/}
            {/*    </Box>*/}
            {/*</Stack>*/}
        </Card>
    );
};

export default ProductItem;
