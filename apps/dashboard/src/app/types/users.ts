export type UserType = {
    id: number;
    firstName: string;
    lastName: string;
    age: string;
    company: {
        name: string;
        title: string;
    };
    role: UserRoleType;
};

export type UserRoleType = 'admin' | 'moderator' | 'user';
