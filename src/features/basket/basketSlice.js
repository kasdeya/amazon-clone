import { createSlice, current } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    user: [],
  },
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1
      // console.log(action)
      // console.log(current(state))
      state.basket.push(action.payload.item);
      // console.log(state.basket.push("test"))
      // console.log(current(state.basket))
    },
    remove: (state, action) => {
      // console.log(action.payload.id)
      // return {
      // ...state,
      //   basket: state.basket.filter(item => item.id !== action.payload.id)
      // }
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.basket]
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.id}) as it's not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    },
    setUser: (state, action) => {
      // console.log(action.payload)
      return {
        ...state,
        user: action.payload
      }
    },
    emptyBasket: (state) => {
      return {
        ...state,
        basket: []
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, remove, incrementByAmount, setUser, emptyBasket } =
  basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
export const selectUser = (state) => state.basket.user

export default basketSlice.reducer;
