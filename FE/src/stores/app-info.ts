import { create } from 'zustand';

interface User {
    id: string;
    fullName: string;
    userName: string;
    email: string;
    gender: string;
}

interface AppInfo {
    name: string;
    isAuthenticated: boolean;
    user: User | null;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setUser: (user: User | null) => void;
}

export const useAppInfo = create<AppInfo>((set) => ({
    name: 'UrbanBuy',
    isAuthenticated: false,
    user: null,
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    setUser: (user: User | null) => set({ user }),
    theme: 'dark',
    setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));