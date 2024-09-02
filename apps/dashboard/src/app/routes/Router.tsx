import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { DashboardLayout } from '@layouts';
import { HomePage, NotFound, RecipesPage, UsersPage } from '@pages';
import { Recipe } from '@features';

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
                {
                    path: 'recipes',
                    element: <Outlet />,
                    children: [
                        {
                            element: <RecipesPage />,
                            index: true,
                        },
                        {
                            path: ':recipeId',
                            element: <Recipe />,
                        },
                    ],
                },
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
