import { Typography } from '@mui/material';

import DashboardContent from '../layouts/DashboardContent';

const NotFound = () => {
    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                NotFound
            </Typography>
        </DashboardContent>
    );
};

export default NotFound;
