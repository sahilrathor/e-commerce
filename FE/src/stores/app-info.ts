import { create } from 'zustand';

interface AppInfo {
    name: string;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppInfo = create<AppInfo>((set) => ({
    name: 'UrbanBuy',
    theme: 'dark',
    setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));