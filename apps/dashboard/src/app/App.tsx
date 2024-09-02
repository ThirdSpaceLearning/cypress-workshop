import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from './theme/theme-provider';

import { Router } from '@routes';
import { queryClient } from '@services';

export const App = () => {
    return (
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default App;
