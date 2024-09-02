import { dummyJson } from '../axios-instance';

import { UserType } from '@types';

export const getUsers = async (): Promise<UserType[]> => {
    return dummyJson
        .get<{ users: UserType[] }>('/users', {
            params: {
                limit: 20,
                select: 'firstName,lastName,age,company,role',
            },
        })
        .then((res) => res.data.users);
};
