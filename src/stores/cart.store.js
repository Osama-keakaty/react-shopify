import { create } from 'zustand'
export const useCartStore = create()(set => ({
    isOpened: false,
    setIsOpened: (value) => set(() => ({ isOpened: value })),
}))