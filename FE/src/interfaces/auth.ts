export interface loginData {
    userName: string;
    password: string;
    rememberMe: boolean;
}

export interface signupData {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: "male" | "female" | "";
}

export interface updatePasswordData {
    userName?: string; 
    email?: string;
    oldPassword?: string;
    newPassword: string;
    confirmNewPassword: string;
}