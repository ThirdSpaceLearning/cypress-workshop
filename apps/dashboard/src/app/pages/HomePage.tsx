import { Typography } from '@mui/material';

import DashboardContent from '../layouts/DashboardContent';

const HomePage = () => {
    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                Hi, welcome back! 👋
            </Typography>
        </DashboardContent>
    );
};

export default HomePage;
