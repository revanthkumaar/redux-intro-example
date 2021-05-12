import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import {toggleMealItemInFavorites} from './mealsreducer-utils'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return toggleMealItemInFavorites(state,action);
    case MEALS_REMOVE:
      return removemeals(state,action);
    default:
      return state;
  }
};

export default mealsReducer;
