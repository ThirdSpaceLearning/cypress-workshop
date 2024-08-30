import { ThemeProvider } from './theme/theme-provider';
import { Router } from '@routes';

export const App = () => {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
};

export default App;
