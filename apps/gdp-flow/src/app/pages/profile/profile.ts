export type Profile = {
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    skills: string[],
    bio: string
}

export type Information = {
    id: number;
    label: string
    formControlName: string;
    value?: string
    mask?: string;
}

export type UserInfosBlock = {
    firstName: string, lastName: string, email: string, phone: string
}