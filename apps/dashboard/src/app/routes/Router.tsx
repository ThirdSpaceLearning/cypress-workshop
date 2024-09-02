import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { DashboardLayout } from '@layouts';
import {
    HomePage,
    NotFound,
    ProductsPage,
    RecipesPage,
    UsersPage,
} from '@pages';

const Router = () => {
    return useRoutes([
        {
            element: (
                <DashboardLayout>
                    <Outlet />
                </DashboardLayout>
            ),
            children: [
                { element: <HomePage />, index: true },
                { path: 'users', element: <UsersPage /> },
                // { path: 'products', element: <ProductsPage /> },
                { path: 'recipes', element: <RecipesPage /> },
                // { path: 'blog', element: <BlogPage /> },
            ],
        },
        // {
        //     path: 'sign-in',
        //     element: (
        //         <AuthLayout>
        //             <SignInPage />
        //         </AuthLayout>
        //     ),
        // },
        {
            path: '404',
            element: <NotFound />,
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};

export default Router;
