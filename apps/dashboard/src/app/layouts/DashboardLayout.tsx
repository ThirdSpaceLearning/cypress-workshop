import { Box, GlobalStyles, useTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import Header from './sections/Header';
import Sidebar from './sections/Sidebar';

import styles from '../app.module.css';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const theme = useTheme();

    const inputGlobalStyles = <GlobalStyles styles={styles} />;

    return (
        <>
            {inputGlobalStyles}

            <Box id="root__layout">
                <Sidebar />
                <Box display="flex" flex="1 1 auto" flexDirection="column">
                    <Header />
                    {children}
                    {/*{footerSection}*/}
                </Box>
            </Box>
        </>
    );
};

export default DashboardLayout;
