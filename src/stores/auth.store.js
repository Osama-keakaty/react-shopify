import { create } from 'zustand'
export const useAuthStore = create((set) => (
    {
        currentUser: null,
        setCurrentUser: (value) => set({ currentUser: value })
    }))