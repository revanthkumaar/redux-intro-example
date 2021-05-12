export const addItemToTheCart = (newItem) => {
  
    state.cartItems.push(newItem);

    newlyUpdatedState = [...state, cartItem: cartItem]

    return newlyUpdatedState;
}