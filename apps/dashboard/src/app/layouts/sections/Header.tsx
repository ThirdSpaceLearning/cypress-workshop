import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Toolbar,
} from '@mui/material';
import { Theme } from '@mui/material/styles';

import avatar2 from '@assets/images/avatar/avatar-2.webp';

const Header = () => {
    return (
        <AppBar
            position="sticky"
            color="transparent"
            sx={{
                boxShadow: 'none',
                zIndex: 1100,
            }}
        >
            <Toolbar disableGutters>
                <Container
                    maxWidth={false}
                    sx={{
                        height: 1,
                        display: 'flex',
                        alignItems: 'center',
                        px: { lg: 5 },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            justifyContent: 'center',
                        }}
                    >
                        {/*{slots?.centerArea}*/}
                    </Box>

                    <Box gap={1} display="flex" alignItems="center">
                        {/*<NotificationsPopover data={_notifications} />*/}
                        <IconButton
                            sx={{
                                p: '2px',
                                width: 40,
                                height: 40,
                                background: (theme: Theme) =>
                                    `conic-gradient(${theme.palette.primary.light}, ${theme.palette.warning.light}, ${theme.palette.primary.light})`,
                            }}
                        >
                            <Avatar src={avatar2} sx={{ width: 1, height: 1 }}>
                                J
                            </Avatar>
                        </IconButton>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
