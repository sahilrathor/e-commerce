import { create } from 'zustand';

interface AppInfo {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppInfo = create<AppInfo>((set) => ({
    theme: 'dark',
    setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));