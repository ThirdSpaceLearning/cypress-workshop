import { FC, PropsWithChildren } from 'react';

import { Box, GlobalStyles, useTheme } from '@mui/material';

import Header from './sections/Header';
import Sidebar from './sections/Sidebar';

import { layoutQuery } from '@utils';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    const inputGlobalStyles = <GlobalStyles styles={{}} />;

    return (
        <>
            {inputGlobalStyles}

            <Box
                id="root__layout"
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    minHeight: '100%',
                    flexDirection: 'column',
                    [theme.breakpoints.up(layoutQuery)]: {
                        pl: '300px',
                    },
                }}
            >
                <Sidebar />
                <Box display="flex" flex="1 1 auto" flexDirection="column">
                    <Header />
                    <Box
                        component="main"
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;
