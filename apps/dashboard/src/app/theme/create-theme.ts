/**
 * COPIED FROM MUI
 */

import type { Theme } from '@mui/material/styles';

import { extendTheme } from '@mui/material/styles';

import {
    shadows,
    typography,
    components,
    colorSchemes,
    customShadows,
} from './core';

// ----------------------------------------------------------------------

export function createTheme(): Theme {
    const initialTheme = {
        colorSchemes,
        shadows: shadows(),
        customShadows: customShadows(),
        shape: { borderRadius: 8 },
        components,
        typography,
        cssVarPrefix: '',
    };

    const theme = extendTheme(initialTheme);

    return theme;
}
