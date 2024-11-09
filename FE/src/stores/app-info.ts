import { create } from 'zustand';

interface AppInfo {
    name: string;
    isAuthenticated: boolean;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAppInfo = create<AppInfo>((set) => ({
    name: 'UrbanBuy',
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    theme: 'dark',
    setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));