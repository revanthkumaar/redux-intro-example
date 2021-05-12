import { MEALS } from '../../data/dummy-data';
import { ADD_CART_ITEM } from './cart-action.types';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return addItemToTheCart(state,action);
    default:
      return state;
  }
};

export default mealsReducer;
