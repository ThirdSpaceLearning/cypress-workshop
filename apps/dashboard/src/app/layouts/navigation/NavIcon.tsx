import { Box } from '@mui/material';
import { FC } from 'react';

type Props = {
    width: string | number;
    height: string | number;
    src: string;
};

export const NavIcon: FC<Props> = ({ width = 24, height = 24, src }) => {
    return (
        <Box
            component="span"
            sx={{
                width,
                flexShrink: 0,
                height: height ?? width,
                display: 'inline-flex',
                bgcolor: 'currentColor',
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
            }}
        />
    );
};
