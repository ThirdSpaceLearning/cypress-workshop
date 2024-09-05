import { Box } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

import { LabelColor } from '@shared';

export const StyledLabel = styled(Box)<{ color: LabelColor }>(
    ({ color, theme }: { color: LabelColor; theme: Theme }) => ({
        height: 24,
        minWidth: 24,
        lineHeight: 0,
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 0.75),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightBold,
        borderRadius: theme.shape.borderRadius * 0.75,
        transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.shorter,
        }),
        color:
            color === 'default'
                ? theme.palette.text.secondary
                : theme.palette[color].dark,
        backgroundColor:
            color === 'default'
                ? `rgba(${theme.palette.grey['500Channel']} / 0.16)`
                : `rgba(${theme.palette[color].mainChannel} / 0.16)`,
    })
);
