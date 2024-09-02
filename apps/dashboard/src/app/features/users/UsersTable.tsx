import { FC } from 'react';

import {
    Avatar,
    Box,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import { UserType } from '@types';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import { Label } from '@shared';

type Props = {
    users: UserType[];
};

const UsersTable: FC<Props> = ({ users }) => {
    return (
        <TableContainer sx={{ overflow: 'auto' }}>
            <Table sx={{ minWidth: 800 }}>
                <TableHead>
                    <TableCell></TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell></TableCell>
                </TableHead>
                <TableBody>
                    {users.map((user, idx) => (
                        <TableRow
                            key={user.id}
                            hover
                            tabIndex={-1}
                            role="checkbox"
                            // selected={selected}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    disableRipple
                                    // checked={selected}
                                    // onChange={onSelectRow}
                                />
                            </TableCell>

                            <TableCell component="th" scope="row">
                                <Box gap={2} display="flex" alignItems="center">
                                    <Avatar
                                        alt={user.firstName}
                                        src={`/assets/images/avatar/avatar-${
                                            idx + 1
                                        }.webp`}
                                    />
                                    {`${user.firstName} ${user.lastName}`}
                                </Box>
                            </TableCell>

                            <TableCell>{user.age}</TableCell>

                            <TableCell>{user.company.name}</TableCell>

                            <TableCell>{user.company.title}</TableCell>

                            <TableCell>
                                <Label
                                    color={
                                        user.role === 'admin'
                                            ? 'warning'
                                            : user.role === 'moderator'
                                            ? 'info'
                                            : 'default'
                                    }
                                >
                                    {user.role}
                                </Label>
                            </TableCell>

                            <TableCell align="right">
                                <IconButton
                                // onClick={handleOpenPopover}
                                >
                                    <GridMoreVertIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
