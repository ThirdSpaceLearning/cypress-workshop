import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { DashboardLayout } from '@layouts';
import { HomePage } from '@pages';

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
                // { path: 'user', element: <UserPage /> },
                // { path: 'products', element: <ProductsPage /> },
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
        // {
        //     path: '404',
        //     element: <Page404 />,
        // },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);
};

export default Router;
