// import {create} from "zustand";

// export const useStore = create((set) => ({
//   user: null,

//   setUser: (user) =>
//     set(() => ({
//       user
//     })),

// }));

import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;