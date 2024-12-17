import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cartIsOpened: false,
    productNum: 0,
    cartItems: [],
    totalItemPrice: 0,
    setCartIsOpened: (value) => set({ cartIsOpened: value }),
    addItemToCart: (productToAdd) => set((state) => {
        const existingItem = state.cartItems.find(item => item.id === productToAdd.id);
        if (existingItem) {
            return {
                cartItems: state.cartItems.map(item => item.id === productToAdd.id ?
                    { ...item, quantity: item.quantity + 1 }
                    : item)
                }
            }
            return { cartItems: [...state.cartItems, { ...productToAdd, quantity: 1 }] };
        }),
        
        removeItemFromCart: (productToRemove) => set((state) => ({ cartItems: state.cartItems.filter((cartItem => cartItem.id !== productToRemove.id)) })),
        increaseItemInCart: (productToIncrease) => set((state) => ({
            cartItems: state.cartItems.map(item => item.id === productToIncrease.id ?
                { ...item, quantity: item.quantity + 1 }
                : item)
            })),

            decreaseItemInCart: (productToDecrease) => set((state) => {
        if (productToDecrease.quantity === 1) {
            return { cartItem: state.cartItems.filter((cartItem => cartItem.id !== productToDecrease.id)) }
        } else {
            return { cartItems: state.cartItems.map(item => item.id === productToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item) }
        }
    }),
    setProductNum: () => set((state) => ({ productNum: state.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)})),
    setTotalItemPrice: (value) => set({ totalItemPrice: value }),
    
    checkoutNum: 0,
    setCheckoutNum: (value) => set({ checkoutNum: value }),
}));
