import { useLocation } from 'react-router-dom';

import { alpha, Box, ListItem, ListItemButton, useTheme } from '@mui/material';

import { navData } from '../navigation/navigation-config';

import { RouterLink } from '@routes';

const Sidebar = () => {
    const { pathname } = useLocation();

    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: 2.5,
                px: 2.5,
                top: 0,
                left: 0,
                height: 1,
                display: 'none',
                position: 'fixed',
                flexDirection: 'column',
                bgcolor: 'common.white',
                zIndex: 1001,
                width: '300px',
                [theme.breakpoints.up('md')]: {
                    display: 'flex',
                },
            }}
        >
            <Box mt={4} mb={6} mx={2}>
                TSL
            </Box>
            <Box display="flex">
                <Box
                    component="nav"
                    display="flex"
                    flex="1 1 auto"
                    flexDirection="column"
                >
                    <Box
                        component="ul"
                        gap={0.5}
                        display="flex"
                        flexDirection="column"
                    >
                        {navData.map((item) => {
                            const isActive = item.path === pathname;

                            return (
                                <ListItem
                                    disableGutters
                                    disablePadding
                                    key={item.title}
                                >
                                    <ListItemButton
                                        disableGutters
                                        component={RouterLink}
                                        href={item.path}
                                        sx={{
                                            pl: 2,
                                            py: 1,
                                            gap: 2,
                                            pr: 1.5,
                                            borderRadius: 0.75,
                                            typography: 'body2',
                                            fontWeight: 'fontWeightMedium',
                                            color: 'text.secondary',
                                            minHeight: '44px',
                                            ...(isActive && {
                                                fontWeight:
                                                    'fontWeightSemiBold',
                                                bgcolor: alpha(
                                                    theme.palette.primary.main,
                                                    0.08
                                                ),
                                                color: 'primary.main',
                                                '&:hover': {
                                                    bgcolor: alpha(
                                                        theme.palette.primary
                                                            .main,
                                                        0.16
                                                    ),
                                                },
                                            }),
                                        }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{ width: 24, height: 24 }}
                                        >
                                            {item.icon}
                                        </Box>

                                        <Box component="span" flexGrow={1}>
                                            {item.title}
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
