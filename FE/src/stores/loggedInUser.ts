import { create } from 'zustand'

interface LoggedInUser {
    authenticated: boolean
    setAuthenticated: (authenticated: boolean) => void
}

const useLoggedInUser = create<LoggedInUser>((set) => ({
    authenticated: false,
    setAuthenticated: (authenticated) => set({ authenticated })
}))
    
export default useLoggedInUser