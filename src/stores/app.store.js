import { create } from 'zustand'
export const useAppStore = create((set) => ({
    widthWindow: window.innerWidth,
    setWidthWindow: () => set({ widthWindow: window.innerWidth }),
})) 