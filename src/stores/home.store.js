import { create } from "zustand";
export const useHomeStore=create(set=>({
imageSliderIndex:0,
setImageSliderIndex:(value)=>set({imageSliderIndex:value}),

}))