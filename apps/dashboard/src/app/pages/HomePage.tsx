import { Typography } from '@mui/material';

import { DashboardContent } from '@layouts';

const HomePage = () => {
    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: 3 }} data-cy="title">
                Hi, welcome back! 👋
            </Typography>
        </DashboardContent>
    );
};

export default HomePage;
