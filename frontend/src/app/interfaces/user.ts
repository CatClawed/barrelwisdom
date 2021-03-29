export class User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    group: string;
}

export class SimpleUser {
    id: number;
    username: string;
}

export class UserLogin {
    user: User;
    token: string;
}

export class UserProfile {
    user: SimpleUser;
    bio: string;
    website: string;
    avatar: string;
}