
import { create } from "zustand";

const useMyStore = create((set) => ({
  cart: [], 
  addToCart: (item) =>
    set((state) => {
      const isExist = state.cart.some((product) => product.id === item.id);
      if (!isExist) {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      } else {
        return {
          cart: state.cart.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),
  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      ),
    })),
}));

export default useMyStore;
