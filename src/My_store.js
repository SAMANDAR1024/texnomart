import { create } from "zustand";

const useMyStore = create((set) => ({
  inputValue: "",
  students: [{ name: "Samandar", id: 1, count: 1 }],
  cart: [], 

  setInputValue: (value) => set({ inputValue: value }),
  setStudents: (newStudents) => set({ students: newStudents }),
  
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })), 
}));



export default useMyStore;
