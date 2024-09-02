import { QueryClient } from '@tanstack/react-query';
export type { QueryStatus } from '@tanstack/react-query';

const queryClient = new QueryClient();

export { queryClient };

export enum QUERY_STATUS {
    error = 'error',
    idle = 'idle',
    loading = 'loading',
    success = 'success',
}
