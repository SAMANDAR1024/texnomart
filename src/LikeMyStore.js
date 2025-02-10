import { create } from "zustand";

const LikeMyStore = create((set) => ({
  likedItems: [],
  toggleLike: (item) =>
    set((state) => {
      const isLiked = state.likedItems.some((liked) => liked.id === item.id);
      return {
        likedItems: isLiked
          ? state.likedItems.filter((liked) => liked.id !== item.id) 
          : [...state.likedItems, item],
      };
    }),
}));

export default LikeMyStore;
