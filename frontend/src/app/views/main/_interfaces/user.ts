export class User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    group: string;
}

export class EditedBlogs {
    title: string;
    slugtitle: string;
    secname: string;
    secfull: string;
}

export class SimpleUser {
    id: number;
    username: string;
}

export class UserData {
    id: number;
    username: string;
    blog_set: EditedBlogs[];
}

export class UserLogin {
    user: User;
    token: string;
}

export class UserProfile {
    user: UserData;
    bio: string;
    website: string;
    avatar: string;
}