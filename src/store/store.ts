import { ICartItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cartItems: ICartItem[];
  cartItemsNumber: number;
};
type Actions = {
  setCartItems: (newItme: ICartItem) => void;
  // setCartItemsNumber: () => void;
};
const useCartStore = create<State & Actions>()(
  persist(
    (set) => ({
      cartItems: [],
      cartItemsNumber: 0,
      // setCartItemsNumber: () =>
      //   set((state) => ({
      //     cartItemsNumber: state.cartItems.length,
      //   })),
      setCartItems: (newItem) =>
        set((state) => {
          const itemExists = state.cartItems.some(
            (item: ICartItem) => item.product.id === newItem.product.id // Assuming each item has a unique 'id' property
          );
          if (!itemExists) {
            return {
              cartItems: [...state.cartItems, newItem],
            };
          }
          return state; // Return the current state if the item already exists
        }),
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
