export class User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    /*
    password: string;
    groups: string[];
    user_permissions: any[];
    is_staff: boolean;
    is_active: boolean;
    is_superuser: boolean;
    last_login: Date;
    date_joined: Date;
    token: string;
    */
}

export class UserLogin {
    user: User;
    token: string;
}