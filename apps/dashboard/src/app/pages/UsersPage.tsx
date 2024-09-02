import { useQuery } from '@tanstack/react-query';

import { Box, Card, Typography } from '@mui/material';

import DashboardContent from '../layouts/DashboardContent';

import { usersApi, QueryKeys, QUERY_STATUS } from '@services';
import { UsersTable } from '@features';
import { UserType } from '@types';

const UsersPage = () => {
    const { status, data } = useQuery<UserType[]>({
        queryKey: [QueryKeys.USERS],
        queryFn: () => usersApi.getUsers(),
        retry: 1,
    });

    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                Users
            </Typography>

            {status === QUERY_STATUS.success && (
                <Box>
                    <Card>
                        <UsersTable users={data} />
                    </Card>
                </Box>
            )}
        </DashboardContent>
    );
};

export default UsersPage;
