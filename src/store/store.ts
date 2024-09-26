import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cartItems: number;
};
type Actions = {
  setCartItems: (noOfItems: number) => void;
};
const useCartStore = create<State & Actions>()(
  persist(
    (set) => ({
      cartItems: 0,
      setCartItems: (noOfItems) => set({ cartItems: noOfItems }),
    }),
    {
      name: "cart-store",
      skipHydration: true,
    }
  )
);

export default useCartStore;
