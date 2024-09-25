import { create } from "zustand";
import { persist } from "zustand/middleware";
type Tselected = {
  S: boolean;
  M: boolean;
  L: boolean;
};
type State = {
  selected: Tselected;
};
type Actions = {
  setSelected: (selected: Tselected) => void;
};
const usePizzaStore = create<State & Actions>()(
  persist(
    (set) => ({
      selected: {
        S: true,
        M: false,
        L: false,
      },
      setSelected: (passed) => set(() => ({ selected: passed })),
    }),
    {
      name: "pizza-store",
      skipHydration: true,
    }
  )
);

export default usePizzaStore;
