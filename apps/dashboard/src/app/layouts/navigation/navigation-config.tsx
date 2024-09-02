import { NavIcon } from './NavIcon';

const icon = (name: string) => (
    <NavIcon
        width="100%"
        height="100%"
        src={`/assets/icons/navbar/${name}.svg`}
    />
);

export const navData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: icon('ic-analytics'),
    },
    {
        title: 'Users',
        path: '/users',
        icon: icon('ic-user'),
    },
    {
        title: 'Recipes',
        path: '/recipes',
        icon: icon('ic-cart'),
    },
    {
        title: 'Sign in',
        path: '/sign-in',
        icon: icon('ic-lock'),
    },
    {
        title: 'Not found',
        path: '/404',
        icon: icon('ic-disabled'),
    },
];
