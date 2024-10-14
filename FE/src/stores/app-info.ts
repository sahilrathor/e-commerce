import { create } from 'zustand';

interface AppInfo {
    name: string;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppInfo = create<AppInfo>((set) => ({
    name: 'TechNova',
    theme: 'dark',
    setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));