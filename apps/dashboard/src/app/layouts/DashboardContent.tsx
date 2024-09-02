import { FC, PropsWithChildren } from 'react';

import { Container, useTheme } from '@mui/material';

import { layoutQuery } from '@utils';

const DashboardContent: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    return (
        <Container
            maxWidth={'xl'}
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                pt: 1,
                pb: 8,
                [theme.breakpoints.up(layoutQuery)]: {
                    px: 5,
                },
            }}
        >
            {children}
        </Container>
    );
};

export default DashboardContent;
