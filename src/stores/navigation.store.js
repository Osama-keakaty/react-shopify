import { create } from 'zustand';
import English from '../assets/usa_flag.png'
import lightMode from '../assets/light-mode.png'
export const useNavigationStore = create((set) => ({
    language: {
        id: 2,
        value: "En",
        img:  English
    },
    setLanguage: (value) => set({ language: value }),
    dropdownLanguage:false,
    setDropdownLanguage:(value)=>set({dropdownLanguage:value}),
    mode:{
        id: 2,
        value: "light",
        img:  lightMode
    },
    setMode:(value)=>set({mode:value}),
    hamburgerMenuIsOpened:false,
    setHamburgerMenuIsOpened:(value)=>set({hamburgerMenuIsOpened:value}),

    dropdownTheme:false,
    setDropdownTheme:(value)=>set({dropdownTheme:value}),
    
    categoriesDropdownIsOpened:false,
    setCategoriesDropdownIsOpened : (value)=>set({categoriesDropdownIsOpened:value}),
}));