import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Toolbar,
} from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import { layoutQuery } from '@utils';

import avatar2 from '@assets/images/avatar/avatar-2.webp';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    backdropFilter: `blur(6px)`,
    WebkitBackdropFilter: `blur(6px)`,
    backgroundColor: `rgba(${theme.palette.background.default} / 0.8)`,
    minHeight: 'auto',
    height: '64px',
    transition: theme.transitions.create(['height', 'background-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    [theme.breakpoints.up('sm')]: {
        minHeight: 'auto',
    },
    [theme.breakpoints.up(layoutQuery)]: {
        height: '72px',
    },
}));

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
            <StyledToolbar disableGutters>
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
                    />
                    <Box gap={1} display="flex" alignItems="center">
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
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;
