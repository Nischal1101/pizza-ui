import { ICartItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cartItems: ICartItem[];
};
type Actions = {
  setCartItems: (newItem: ICartItem) => void;
  removeCartItem: (itemId: number) => void;
};
const useCartStore = create<State & Actions>()(
  persist(
    (set) => ({
      cartItems: [],
      setCartItems: (newItem) =>
        set((state) => {
          const itemExists = state.cartItems.some(
            (item: ICartItem) =>
              item.product.id === newItem.product.id &&
              item.chosenConfiguration.priceConfiguration.size ===
                newItem.chosenConfiguration.priceConfiguration.size // Assuming each item has a unique 'id' property
          );
          if (!itemExists) {
            return {
              cartItems: [...state.cartItems, newItem],
            };
          }
          return state; // Return the current state if the item already exists
        }),
      removeCartItem: (itemId) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item: ICartItem) => item.product.id !== itemId
          ),
        })),
    }),
    {
      name: "cart-store",
      onRehydrateStorage: () => (state) => {
        console.log("Rehydrating state:", state);
      },
    }
  )
);

export default useCartStore;
