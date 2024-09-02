import { useQuery } from '@tanstack/react-query';

import { Box, Card, Typography } from '@mui/material';

import { DashboardContent } from '@layouts';
import { UsersTable } from '@features';
import { usersApi, QueryKeys, QUERY_STATUS } from '@services';
import { UserType } from '@types';

const UsersPage = () => {
    const { status, data } = useQuery<UserType[]>({
        queryKey: [QueryKeys.USERS],
        queryFn: () => usersApi.getUsers(),
        retry: 1,
    });

    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: 3 }}>
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
