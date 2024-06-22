export interface RegisterForm {
    name: string;
    userName: string;
    email: string;
    password: string;
    repeatPassword: string;
    terms: any;
}

export interface LoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface FormErrors {
    isError?: boolean;
    title: string;
    message: string;
}